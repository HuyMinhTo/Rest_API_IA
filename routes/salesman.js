var express = require('express');
var router = express.Router();
const axios = require('axios');
const calculateBonus = require('../utils/bonusCalculator'); // Bonusberechnungsmodul importieren

// Beispiel-Daten für Verkäufer
let salesmen = [
    { id: 1, name: "Huy", age: 22, salesAmount: 120, importanceLevel: 4 },
    { id: 2, name: "Shkodran", age: 21, salesAmount: 80, importanceLevel: 2 }
];

// GET: Liste aller Verkäufer abrufen
router.get('/', (req, res) => {
    res.json(salesmen);
});

// GET: Einzelnen Verkäufer abrufen
router.get('/:id', (req, res) => {
    const salesmanId = parseInt(req.params.id);
    const salesman = salesmen.find(s => s.id === salesmanId);

    if (!salesman) {
        return res.status(404).send('Verkäufer nicht gefunden');
    }
    res.json(salesman);
});

// POST: Neuen Verkäufer hinzufügen
router.post('/', (req, res) => {
    const newSalesman = req.body;
    newSalesman.id = salesmen.length + 1;
    salesmen.push(newSalesman);
    res.status(201).json(newSalesman);
});

// PUT: Vorhandenen Verkäufer aktualisieren
router.put('/:id', (req, res) => {
    const salesmanId = parseInt(req.params.id);
    const salesman = salesmen.find(s => s.id === salesmanId);

    if (!salesman) {
        return res.status(404).send('Verkäufer nicht gefunden');
    }

    // Verkäuferdaten aktualisieren
    Object.assign(salesman, req.body);
    res.json(salesman);
});

// DELETE: Verkäufer löschen
router.delete('/:id', (req, res) => {
    const salesmanId = parseInt(req.params.id);
    const index = salesmen.findIndex(s => s.id === salesmanId);

    if (index === -1) {
        return res.status(404).send('Verkäufer nicht gefunden');
    }

    // Verkäufer entfernen
    const deletedSalesman = salesmen.splice(index, 1);
    res.json(deletedSalesman[0]);
});

// GET: Bonus für einen Verkäufer berechnen
router.get('/:id/bonus', async (req, res) => {
    const salesmanId = parseInt(req.params.id);
    const salesman = salesmen.find(s => s.id === salesmanId);

    if (!salesman) {
        return res.status(404).send('Verkäufer nicht gefunden');
    }

    try {
        const response = await axios.get(`http://localhost:3000/api/performance`);
        const performance = response.data.find(p => p.salesmanId === salesmanId);

        if (!performance) {
            return res.status(404).send('Leistungsbewertung für den Verkäufer nicht gefunden');
        }

        const bonus = calculateBonus(salesman.salesAmount, salesman.importanceLevel, performance.rating);
        res.json({ id: salesman.id, name: salesman.name, bonus });
    } catch (error) {
        res.status(500).send('Fehler bei der Berechnung des Bonus');
    }
});

module.exports = router;

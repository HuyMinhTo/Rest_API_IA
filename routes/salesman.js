var express = require('express');
var router = express.Router();

// Hardcodierte Beispiel-Daten für Verkäufer
let salesmen = [
    { id: 1, name: "Huy", age: 22, salesAmount: 120, importanceLevel: 4 },
    { id: 2, name: "Shkodran", age: 21, salesAmount: 80, importanceLevel: 2 }
];

// GET: Liste aller Verkäufer abrufen
router.get('/', (req, res) => {
    res.json(salesmen);
});

// POST: Neuen Verkäufer hinzufügen
router.post('/', (req, res) => {
    const newSalesman = req.body;
    newSalesman.id = salesmen.length + 1;
    salesmen.push(newSalesman);
    res.status(201).json(newSalesman);
});

module.exports = router;


const calculateBonus = require('../utils/bonusCalculator'); // Bonusberechnungsmodul importieren

// GET: Bonus für einen Verkäufer berechnen
router.get('/:id/bonus', (req, res) => {
    const salesmanId = parseInt(req.params.id);
    const salesman = salesmen.find(s => s.id === salesmanId);
    const performance = performanceRecords.find(p => p.salesmanId === salesmanId);

    if (!salesman || !performance) {
        return res.status(404).send('Daten für den Verkäufer oder die Leistung nicht gefunden');
    }

    const bonus = calculateBonus(salesman.salesAmount, salesman.importanceLevel, performance.rating);
    res.json({ id: salesman.id, name: salesman.name, bonus });
});

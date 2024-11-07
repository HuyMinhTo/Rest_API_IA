var express = require('express');
var router = express.Router();

// Hardcodierte Beispiel-Daten
let salesmen = [
    { id: 1, name: "Huy", age: 22 },
    { id: 2, name: "Shkodran", age: 21 }
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

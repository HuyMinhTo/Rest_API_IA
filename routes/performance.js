var express = require('express');
var router = express.Router();

// Hardcodierte Beispiel-Daten für Leistungsbewertungen
let performanceRecords = [
    { id: 1, salesmanId: 1, rating: 4.5, feedback: "Sehr gute Leistung" },
    { id: 2, salesmanId: 2, rating: 3.8, feedback: "Gute Leistung" }
];

// GET: Alle Leistungsbewertungen abrufen
router.get('/', (req, res) => {
    res.json(performanceRecords);
});

// POST: Neue Leistungsbewertung hinzufügen
router.post('/', (req, res) => {
    const newRecord = req.body;
    newRecord.id = performanceRecords.length + 1;
    performanceRecords.push(newRecord);
    res.status(201).json(newRecord);
});

module.exports = router;

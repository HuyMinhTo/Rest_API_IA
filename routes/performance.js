var express = require('express');
var router = express.Router();

// Beispiel-Daten für Leistungsbewertungen
let performanceRecords = [
    { id: 1, salesmanId: 1, rating: 4.0, feedback: "Sehr gute Leistung" },
    { id: 2, salesmanId: 2, rating: 3.5, feedback: "Gute Leistung" }
];

// GET: Alle Leistungsbewertungen abrufen
router.get('/', (req, res) => {
    res.json(performanceRecords);
});

// GET: Einzelne Leistungsbewertung abrufen
router.get('/:id', (req, res) => {
    const recordId = parseInt(req.params.id);
    const record = performanceRecords.find(p => p.id === recordId);

    if (!record) {
        return res.status(404).send('Leistungsbewertung nicht gefunden');
    }
    res.json(record);
});

// POST: Neue Leistungsbewertung hinzufügen
router.post('/', (req, res) => {
    const newRecord = req.body;
    newRecord.id = performanceRecords.length + 1;
    performanceRecords.push(newRecord);
    res.status(201).json(newRecord);
});

// PUT: Leistungsbewertung aktualisieren
router.put('/:id', (req, res) => {
    const recordId = parseInt(req.params.id);
    const record = performanceRecords.find(p => p.id === recordId);

    if (!record) {
        return res.status(404).send('Leistungsbewertung nicht gefunden');
    }

    // Leistungsbewertung aktualisieren
    Object.assign(record, req.body);
    res.json(record);
});

// DELETE: Leistungsbewertung löschen
router.delete('/:id', (req, res) => {
    const recordId = parseInt(req.params.id);
    const index = performanceRecords.findIndex(p => p.id === recordId);

    if (index === -1) {
        return res.status(404).send('Leistungsbewertung nicht gefunden');
    }

    const deletedRecord = performanceRecords.splice(index, 1);
    res.json(deletedRecord[0]);
});

module.exports = router;

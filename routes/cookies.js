const express = require('express');
const router = express.Router();

// Route zum Setzen eines Cookies
// http://localhost:3000/cookies/set
router.get('/set', (req, res) => {
    res.cookie('username', 'Huy', { maxAge: 900000, httpOnly: true });
    res.send('Cookie "username" wurde gesetzt');
});

// Route zum Lesen des Cookies
// http://localhost:3000/cookies/get
router.get('/get', (req, res) => {
    const username = req.cookies.username;
    if (username) {
        res.send(`Cookie-Wert: ${username}`);
    } else {
        res.send('Kein Cookie "username" gefunden');
    }
});

// Route zum Löschen des Cookies
// http://localhost:3000/cookies/delete
router.get('/delete', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie "username" wurde gelöscht');
});

module.exports = router;

const axios = require('axios');

// Basis-URL des lokalen Servers
const baseUrl = 'http://localhost:3000/api';

// Funktion, um alle Verkäufer vom lokalen Server abzurufen
async function getAllSalesmen() {
    try {
        // Anfrage an die lokale API
        const response = await axios.get(`${baseUrl}/salesman`);
        const salesmen = response.data;

        // Ausgabe der Verkäufer-Daten in der Reihenfolge id, name, age
        salesmen.forEach(salesman => {
            console.log(`ID: ${salesman.id}, Name: ${salesman.name}, Age: ${salesman.age}`);
        });
    } catch (error) {
        console.error("Fehler beim Abrufen der Verkäufer:", error);
    }
}

// Funktion, um einen neuen Verkäufer hinzuzufügen
async function addSalesman(newSalesman) {
    try {
        const response = await axios.post(`${baseUrl}/salesman`, newSalesman);
        const addedSalesman = response.data;

        // Ausgabe des hinzugefügten Verkäufers in der Reihenfolge id, name, age
        console.log(`Neuer Verkäufer hinzugefügt - ID: ${addedSalesman.id}, Name: ${addedSalesman.name}, Age: ${addedSalesman.age}`);
    } catch (error) {
        console.error("Fehler beim Hinzufügen eines Verkäufers:", error);
    }
}

// Beispielaufrufe der Funktionen
getAllSalesmen(); // Abfrage aller Verkäufer
addSalesman({ name: "Ben", age: 28 }); // Hinzufügen eines neuen Verkäufers


//imt Terminal mit node axiosClient.js ausführen und Daten ausgeben lassen
/*Was ist das Observer Pattern?
Das Observer Pattern ist ein Entwurfsmuster (Design Pattern) aus der Softwareentwicklung,
das eine Eins-zu-viele-Beziehung zwischen Objekten definiert. Es ermöglicht einem Objekt (dem Subjekt),
eine Liste von Abonnenten (den Beobachtern) zu informieren, wenn sich sein Zustand ändert.*/

/*Was ist RxJS? RxJS ist eine Bibliothek für reaktive Programmierung in JavaScript,
die das Observer Pattern implementiert. Es ermöglicht Entwicklern, mit asynchronen Datenströmen zu arbeiten
und diese auf eine deklarative Art und Weise zu verarbeiten.*/

const { Subject } = require('rxjs');

// Erstelle ein Subject (ein Observer)
const subject = new Subject();

// Subscriber 1
subject.subscribe(data => {
    console.log(`Subscriber 1: ${data}`);
});

// Subscriber 2
subject.subscribe(data => {
    console.log(`Subscriber 2: ${data}`);
});

// Ein Ereignis senden
subject.next('Neues Ereignis');
subject.next('Noch ein Ereignis');


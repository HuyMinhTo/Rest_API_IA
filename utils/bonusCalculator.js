function calculateBonus(salesAmount, importanceLevel, rating) {
    // Berechnung der Wichtigkeitsstufe
    let importanceMultiplier;
    switch (importanceLevel) {
        case 1:
            importanceMultiplier = 10;
            break;
        case 2:
            importanceMultiplier = 20;
            break;
        case 3:
            importanceMultiplier = 30;
            break;
        case 4:
            importanceMultiplier = 40;
            break;
        case 5:
            importanceMultiplier = 50;
            break;
        default:
            importanceMultiplier = 0; // Falls die Wichtigkeit außerhalb von 1-5 liegt
    }

    const salesBonus = salesAmount * importanceMultiplier;

    // Berechnung des Social Performance Ratings
    const ratingBonus = (rating / 5) * 250; // Skaliert von 0 bis 250 Euro

    // Gesamtbonus
    return salesBonus + ratingBonus;
}

module.exports = calculateBonus;

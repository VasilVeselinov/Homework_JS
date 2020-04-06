function calculateOfPrice(month, nights) {
    nights = parseInt(nights);
    let costForApartment = 0;
    let costForStudio = 0;
    if (month == "May" || month == "October") {
        if (nights > 7 && nights <= 14) {
            costForApartment = nights * 65;
            costForStudio = nights * 50 * 0.95;
        } else if (nights > 14) {
            costForApartment = nights * 65 * 0.90;
            costForStudio = nights * 50 * 0.70;
        } else {
            costForApartment = nights * 65;
            costForStudio = nights * 50;
        }
    } else if (month == "June" || month == "September") {
        if (nights > 14) {
            costForApartment = nights * 68.70 * 0.90;
            costForStudio = nights * 75.20 * 0.80;
        } else {
            costForApartment = nights * 68.70;
            costForStudio = nights * 75.20;
        }
    } else if (month == "July" || month == "August") {
        if (nights > 14) {
            costForApartment = nights * 77 * 0.90;
            costForStudio = nights * 76;
        } else {
            costForApartment = nights * 77;
            costForStudio = nights * 76;
        }
    }
    console.log(`Apartment: ${costForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${costForStudio.toFixed(2)} lv.`);
}

calculateOfPrice("May", 15); // Apartment: 877.50 lv.
                             // Studio: 525.00 lv.
calculateOfPrice("June", 14); // Apartment: 961.80 lv.
                              // Studio: 1052.80 lv.
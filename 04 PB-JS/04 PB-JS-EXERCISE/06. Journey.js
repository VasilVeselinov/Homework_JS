function calculateEnoughOrNotEnoughTheBudgetForJourney(budget, season) {
    budget = parseFloat(budget);
    let journey = "";
    let campOrHotel = "";
    let spentBudget = 0;
    if (budget <= 100 && season == "summer") {
        journey = "Somewhere in Bulgaria";
        spentBudget = budget * 0.30;
        campOrHotel = "Camp";
    } else if (budget <= 100 && season == "winter") {
        journey = "Somewhere in Bulgaria";
        spentBudget = budget * 0.70;
        campOrHotel = "Hotel";
    } else if (budget > 100 && budget <= 1000 && season == "summer") {
        journey = "Somewhere in Balkans";
        spentBudget = budget * 0.40;
        campOrHotel = "Camp";
    } else if (budget > 100 && budget <= 1000 && season == "winter") {
        journey = "Somewhere in Balkans";
        spentBudget = budget * 0.80;
        campOrHotel = "Hotel";
    } else {
        journey = "Somewhere in Europe";
        spentBudget = budget * 0.90;
        campOrHotel = "Hotel";
    }
    console.log(journey);
    console.log(`${campOrHotel} - ${spentBudget.toFixed(2)}`)
}

calculateEnoughOrNotEnoughTheBudgetForJourney(50, "summer"); // Somewhere in Bulgaria
                                                             // Camp - 15.00
calculateEnoughOrNotEnoughTheBudgetForJourney(75, "winter"); // Somewhere in Bulgaria
                                                             // Hotel - 52.50
calculateEnoughOrNotEnoughTheBudgetForJourney(312, "summer"); // Somewhere in Balkans
                                                              // Camp - 124.80
calculateEnoughOrNotEnoughTheBudgetForJourney(678.53, "winter"); // Somewhere in Balkans
                                                                 // Hotel - 542.82
calculateEnoughOrNotEnoughTheBudgetForJourney(1500, "summer"); // Somewhere in Europe
                                                               // Hotel - 1350.00
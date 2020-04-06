function calculateEnoughOrNotEnoughTheBudget(budget, season, numberOfFishermen) {
    budget = Number(budget);
    numberOfFishermen = parseInt(numberOfFishermen);
    let costForRent = 0;
    if (season == "Spring") {
        costForRent = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        costForRent = 4200;
    } else {
        costForRent = 2600;
    }
    if (numberOfFishermen >= 0 && numberOfFishermen <= 6) {
        costForRent = costForRent * 0.90;
    } else if (numberOfFishermen > 6 && numberOfFishermen <= 11) {
        costForRent = costForRent * 0.85;
    } else if (numberOfFishermen >= 12) {
        costForRent = costForRent * 0.75;
    }
    if (numberOfFishermen % 2 == 0 && season != "Autumn") {
        costForRent = costForRent * 0.95;
    }
    if (budget >= costForRent) {
        console.log(`Yes! You have ${(budget - costForRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(costForRent - budget).toFixed(2)} leva.`);
    }
}

calculateEnoughOrNotEnoughTheBudget(3000, "Summer", 11); // Not enough money! You need 570.00 leva.
calculateEnoughOrNotEnoughTheBudget(3600, "Autumn", 6); // Not enough money! You need 180.00 leva.
function calculationWhethertheFundsProvidedAreSufficientToMakeTheFilm(budget,  numberOfExtras, priceForClothing){
    budget = Number(budget);
    numberOfExtras = parseInt(numberOfExtras);
    priceForClothing = parseFloat(priceForClothing);

    let costOfdecor = budget * 0.10;
    let totalCostOfClothing = numberOfExtras * priceForClothing;
    if(numberOfExtras > 150){
        totalCostOfClothing -= totalCostOfClothing * 0.10;
    }
    let totalCost = costOfdecor + totalCostOfClothing;
    if(budget < totalCost){
        console.log(`Not enough money!\nWingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    }else{
        console.log(`Action!\nWingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    }
}

calculationWhethertheFundsProvidedAreSufficientToMakeTheFilm(20000,  120, 55.5); // Action!
                                                                                 // Wingard starts filming with 11340.00 leva left.
calculationWhethertheFundsProvidedAreSufficientToMakeTheFilm(15437.62, 186, 57.99); // Action!
                                                                                    // Wingard starts filming with 4186.33 leva left.
calculationWhethertheFundsProvidedAreSufficientToMakeTheFilm(9587.88, 222, 55.68); // Not enough money!
                                                                                   // Wingard needs 2495.77 leva more.
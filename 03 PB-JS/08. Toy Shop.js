function calculatingTheProfitFromTheOrderAndWhetherTheMoneyWillDoForATrip(
    priceoftheexcursion, numberOfPuzzle, numberOfTalkingDoll, numberOfTeddyBear, numberOfMinion, numberOfTruck
    ){

        priceoftheexcursion = parseFloat(priceoftheexcursion);
        numberOfPuzzle = parseInt(numberOfPuzzle);
        numberOfTalkingDoll = parseInt(numberOfTalkingDoll);
        numberOfTeddyBear = parseInt(numberOfTeddyBear);
        numberOfMinion = parseInt(numberOfMinion);
        numberOfTruck = parseInt(numberOfTruck);
        let priceOfPuzzle = 2.60;
        let priceOfTalkingDoll = 3;
        let priceOfTeddyBear = 4.10;
        let priceOfMinion = 8.20;
        let priceOfTruck = 2;
        let profit = 0;
        profit = numberOfPuzzle * priceOfPuzzle + 
        numberOfTalkingDoll * priceOfTalkingDoll + 
        numberOfTeddyBear * priceOfTeddyBear + 
        numberOfMinion * priceOfMinion + numberOfTruck * priceOfTruck;
        let totalNumberOfToys = numberOfPuzzle + numberOfTalkingDoll + numberOfTeddyBear + numberOfMinion + numberOfTruck;
        if(totalNumberOfToys >= 50){
            let discount = profit * 0.25;
            profit = profit - (discount);
        }
        let shopRent = profit * 0.10;
        profit = profit - (shopRent);
        if(priceoftheexcursion <= profit){
            console.log(`Yes! ${(profit - priceoftheexcursion).toFixed(2)} lv left.`);
        }else{
            console.log(`Not enough money! ${(priceoftheexcursion - profit).toFixed(2)} lv needed.`);
        }
}

calculatingTheProfitFromTheOrderAndWhetherTheMoneyWillDoForATrip(40.8, 20, 25, 30, 50, 10); // Yes! 418.20 lv left.
calculatingTheProfitFromTheOrderAndWhetherTheMoneyWillDoForATrip(320, 8, 2, 5, 5, 1); // Not enough money! 238.73 lv needed.
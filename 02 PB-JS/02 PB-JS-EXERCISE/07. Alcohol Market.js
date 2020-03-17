function calculateHowMuchMoneyHeNeeds(costOfWhiskey, beerLiters, wineLiters, rakiaLiters, whiskeyLiters) {
    costOfWhiskey = Number(costOfWhiskey);
    beerLiters = Number(beerLiters);
    wineLiters = Number(wineLiters);
    rakiaLiters = Number(rakiaLiters);
    whiskeyLiters = Number(whiskeyLiters);
    let costOfRakia = costOfWhiskey * 0.50;
    let costOfWine = costOfRakia * 0.60;
    let costOfBeer = costOfRakia * 0.20;
    let total = costOfWhiskey * whiskeyLiters + costOfBeer * beerLiters + 
                costOfRakia * rakiaLiters + costOfWine * wineLiters;
    console.log(total.toFixed(2));
}

calculateHowMuchMoneyHeNeeds(50, 10, 3.5, 6.5, 1); // 315.00
calculateHowMuchMoneyHeNeeds(63.44, 3.57, 6.35, 8.15, 2.5); // 560.62
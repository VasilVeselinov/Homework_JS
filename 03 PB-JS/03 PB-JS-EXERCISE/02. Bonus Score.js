function calculateBonusPointsAndTotalNumber(number){
    number = Number(number);
    let bonusPoints = 0;
    if(number <= 100){
        bonusPoints += 5;
    }else if(number <= 1000){
        bonusPoints += number * 0.20;
    }else{
        bonusPoints += number * 0.10;
    }
    if(number % 2 == 0){
        bonusPoints += 1;
    }
    if(number % 10 == 5){
        bonusPoints += 2;
    }
    console.log(bonusPoints);
    console.log(number + bonusPoints);
}

calculateBonusPointsAndTotalNumber(20); // 6, 26
calculateBonusPointsAndTotalNumber(175); // 37, 212
calculateBonusPointsAndTotalNumber(2703); // 270.3, 2973.3
calculateBonusPointsAndTotalNumber(15875); // 1589.5, 17464.5
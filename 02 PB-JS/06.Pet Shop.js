function calculate(numberOfDog, numberOfOtherDog) {
    let result = numberOfDog * 2.5;
    let otherResult = numberOfOtherDog * 4;
    console.log((result + otherResult).toFixed(2) + " lv.");
}

calculate(5, 4); // 28.50 lv.
calculate(13, 9); // 68.50 lv.
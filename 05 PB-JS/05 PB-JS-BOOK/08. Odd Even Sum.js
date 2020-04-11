function printIsEqualEvenOrOddPosition(numbers) {
    let numberN = Number(numbers[0]);
    let eventSum = 0;
    let oddSum = 0;
    for (let index = 1; index <= numberN; index++) {
        if (index % 2 == 0) {
            eventSum += Number(numbers[index]);
        } else {
            oddSum += Number(numbers[index]);
        }
    }
    let difference = Math.abs(eventSum - oddSum);
    if (difference == 0) {
        console.log("Yes, sum = " + eventSum);
    } else {
        console.log("No, diff = " + difference);
    }
}

printIsEqualEvenOrOddPosition([4, 10, 50, 60, 20]); // Yes, sum = 70
printIsEqualEvenOrOddPosition([4, 3, 5, 1, -2]); // No, diff = 1
printIsEqualEvenOrOddPosition([3, 5, 8, 1]); // No, diff = 2
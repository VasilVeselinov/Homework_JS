function calculateSumFromNumbersAndFindNumber(numbers) {
    let sum = 0;
    let numberN = numbers[0];
    let maxNumber = Number.NEGATIVE_INFINITY;
    for (let index = 1; index <= numberN; index++) {
        let currentNumber = Number(numbers[index]);
        sum += currentNumber;
        if (maxNumber < currentNumber) {
            maxNumber = currentNumber;
        }
    }
    let difference = sum - maxNumber * 2;
    if (difference == 0) {
        console.log(`Yes\nSum = ${maxNumber}`);
    } else {
        console.log(`No\nDiff = ${Math.abs(difference)}`);
    }
}

calculateSumFromNumbersAndFindNumber([7, 3, 4, 1, 1, 2, 12, 1]);
// Yes
// Sum = 12
calculateSumFromNumbersAndFindNumber([4, 6, 1, 2, 3]);
// Yes
// Sum = 6
calculateSumFromNumbersAndFindNumber([3, 1, 1, 10]);
// No
// Diff = 8
calculateSumFromNumbersAndFindNumber([3, 5, 5, 1]);
// No
// Diff = 1
calculateSumFromNumbersAndFindNumber([3, 1, 1, 1]);
// No
// Diff = 1
function printMinNumberBetweenNNumbers(numbers) {
    let numberN = Number(numbers[0]);
    let minNumber = Number.POSITIVE_INFINITY;
    for (let index = 1; index <= numberN; index++) {
        let currentNumber = Number(numbers[index]);
        if (minNumber > currentNumber) {
            minNumber = currentNumber;
        }
    }
    console.log(minNumber);
}

printMinNumberBetweenNNumbers([2, 100, 99]); // 99
printMinNumberBetweenNNumbers([3, -10, 20, -30]); // -30
printMinNumberBetweenNNumbers([4, 45, -20, 7, 99]); // -20
printMinNumberBetweenNNumbers([1, 999]); // 999
printMinNumberBetweenNNumbers([2, -1, -2]); // -2
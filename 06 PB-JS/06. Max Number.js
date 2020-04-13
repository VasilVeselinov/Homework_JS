function printMaxNumberBetweenNNumbers(numbers) {
    let numberN = Number(numbers[0]);
    let maxNumber = Number.NEGATIVE_INFINITY;
    for (let index = 1; index <= numberN; index++) {
        let currentNumber = Number(numbers[index]);
        if (maxNumber < currentNumber) {
            maxNumber = currentNumber;
        }
    }
    console.log(maxNumber);
}

printMaxNumberBetweenNNumbers([2, 100, 99]); // 100
printMaxNumberBetweenNNumbers([3, -10, 20, -30]); // 20
printMaxNumberBetweenNNumbers([4, 45, -20, 7, 99]); // 99
printMaxNumberBetweenNNumbers([1, 999]); // 999
printMaxNumberBetweenNNumbers([2, -1, -2]); // -1
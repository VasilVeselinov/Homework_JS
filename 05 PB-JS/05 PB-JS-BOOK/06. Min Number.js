function printMinNumber(numbers) {
    let minNumber = Number.POSITIVE_INFINITY;
    let numberN = Number(numbers[0]);
    for (let index = 1; index <= numberN; index++) {
        let currentNumber = Number(numbers[index]);
        if (minNumber > currentNumber) {
            minNumber = currentNumber;
        }
    }
    console.log(minNumber);
}

printMinNumber([2, 100, 99]); // 99
printMinNumber([3, -10, 20, -30]); // -30
printMinNumber([4, 45, -20, 7, 99]); // -20
printMinNumber([0]); // Infinity
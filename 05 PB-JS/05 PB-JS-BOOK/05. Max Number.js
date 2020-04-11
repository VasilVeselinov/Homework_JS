function printMaxNumber(numbers) {
    let maxNumber = Number.NEGATIVE_INFINITY;
    let numberN = Number(numbers[0]);
    for (let index = 1; index <= numberN; index++) {
        let currentNumber = Number(numbers[index]);
        if (maxNumber < currentNumber) {
            maxNumber = currentNumber;
        }
    }
    console.log(maxNumber);
}

printMaxNumber([2, 100, 99]); // 100
printMaxNumber([3, -10, 20, -30]); // 20
printMaxNumber([4, 45, -20, 7, 99]); // 99
printMaxNumber([1, 999]); // 999
printMaxNumber([2, -1, -2]); // -1
printMaxNumber([1, -100000000000000000000000000000000000]); // -1e+35
printMaxNumber([0]); // -Infinity
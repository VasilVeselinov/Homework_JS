function calculateSumFromNumbers(numbers) {
    let sum = 0;
    let numberN = numbers[0];
    for (let index = 1; index <= numberN; index++) {
        sum += Number(numbers[index]);
    }
    console.log(sum);
}

calculateSumFromNumbers([2, 10, 20]); // 30
calculateSumFromNumbers([3, -10, -20, -30]); // -60
calculateSumFromNumbers([4, 45, -20, 7, 11]); // 43
calculateSumFromNumbers([1, 999]); // 999
calculateSumFromNumbers([0]); // 0
function checksAllPossibleCombinations(beginningOfTheInterval, endOfInterval, magicNumber) {
    beginningOfTheInterval = parseInt(beginningOfTheInterval);
    endOfInterval = parseInt(endOfInterval);
    magicNumber = parseInt(magicNumber);
    let count = 0;
    let hasPossibleCombinations = false;
    let firstNumber = 0;
    let secondNumber = 0;
    for (let x1 = beginningOfTheInterval; x1 <= endOfInterval; x1++) {
        for (let x2 = beginningOfTheInterval; x2 <= endOfInterval; x2++) {
            count++;
            if (x1 + x2 == magicNumber) {
                hasPossibleCombinations = true;
                firstNumber = x1;
                secondNumber = x2;
                break;
            }
        }
        if (hasPossibleCombinations) {
            break;
        }
    }
    if (hasPossibleCombinations) {
        console.log(`Combination N:${count} (${firstNumber} + ${secondNumber} = ${magicNumber})`);
    } else {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}

checksAllPossibleCombinations(1, 10, 5); // Combination N:4 (1 + 4 = 5)
checksAllPossibleCombinations(88, 888, 1000); // Combination N:20025 (112 + 888 = 1000)
checksAllPossibleCombinations(23, 24, 20); // 4 combinations - neither equals 20
checksAllPossibleCombinations(88, 888, 2000); // 641601 combinations - neither equals 2000
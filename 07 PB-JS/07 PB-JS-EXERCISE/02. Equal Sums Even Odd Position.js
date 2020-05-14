function printEqualSumsEvenOddPosition(firstNumber, secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    let printLine = "";
    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 1; j <= 6; j++) {
            let num = parseInt(currentNumber % 10);
            if (j % 2 != 0) {
                oddSum += num;
            } else {
                evenSum += num;
            }
            currentNumber /= 10;
        }
        if (evenSum == oddSum) {
            printLine += i + " ";
        }
    }
    console.log(printLine);
}

printEqualSumsEvenOddPosition(100000, 100050); // 100001 100012 100023 100034 100045
console.log();
printEqualSumsEvenOddPosition(123456, 124000); // 123464 123475 123486 123497 123530 123541 123552 123563 123574 123585 123596 123640 123651 123662 123673 123684 123695 123750 123761 123772 123783 123794 123860 123871 123882 123893 123970 123981 123992
function printPyramidFromNumbers(n) {
    n = parseInt(n);
    let row = 1;
    let currentNumber = 1;
    while (currentNumber <= n) {
        let printRow = "";
        for (let start = 0; start < row; start++) {
            printRow += currentNumber + " ";
            currentNumber++;
            if (currentNumber > n) {
                break;
            }
        }
        console.log(printRow);
        if (currentNumber > n) {
            break;
        }
        row++;
    }
}

printPyramidFromNumbers(1);
console.log();
printPyramidFromNumbers(7);
console.log();
printPyramidFromNumbers(10);
console.log();
printPyramidFromNumbers(12);
console.log();
printPyramidFromNumbers(15);
console.log();
function printSquareFrame(sideOfTheFrame) {
    sideOfTheFrame = parseInt(sideOfTheFrame);
    for (let row = 0; row < sideOfTheFrame; row++) {
        if (row == 0 || row == sideOfTheFrame - 1) {
            let printRow = "+";
            for (let i = 0; i < sideOfTheFrame - 2; i++) {
                printRow += " -";
            }
            console.log(printRow + " +");
        } else {
            let printRow = "|";
            for (let i = 0; i < sideOfTheFrame - 2; i++) {
                printRow += " -";
            }
            console.log(printRow + " |");
        }
    }
}

printSquareFrame(3);
// + - +
// | - |
// + - +
console.log();
printSquareFrame(4);
// + - - +
// | - - |
// | - - |
// + - - +
console.log();
printSquareFrame(5);
// + - - - +
// | - - - |
// | - - - |
// | - - - |
// + - - - +
console.log();
printSquareFrame(6);
// + - - - - +
// | - - - - |
// | - - - - |
// | - - - - |
// | - - - - |
// + - - - - +
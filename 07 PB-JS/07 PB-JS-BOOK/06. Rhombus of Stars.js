function printRhombus(numberN) {
    numberN = parseInt(numberN);
    for (let index = 0; index < numberN; index++) {
        let printRow = "";
        for (let j = 0; j < numberN - index - 1; j++) {
            printRow += " ";
        }
        printRow += "*";
        for (let j = 0; j < index; j++) {
            printRow += " *";
        }
        console.log(printRow);
    }
    for (let index = numberN - 1; index > 0; index--) {
        let space = " ";
        let printRow = "";
        printRow = space.repeat(numberN - index - 1);
        let star = " *";
        printRow += star.repeat(index);
        console.log(printRow);
    }
}

printRhombus(1);
console.log();
// *
printRhombus(2);
console.log();
//  *
// * *
//  *
printRhombus(3);
console.log();
//   *
//  * *
// * * *
//  * *
//   *
printRhombus(4);
console.log();
//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *
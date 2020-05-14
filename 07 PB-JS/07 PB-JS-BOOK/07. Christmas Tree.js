function printChristmasTree(n) {
    n = parseInt(n);
    let space = " ";
    let star = "*";
    let printRow = "";
    for (let row = 0; row < n + 1; row++) {
        printRow = space.repeat(n - row);
        printRow += star.repeat(row);
        printRow += " | ";
        printRow += star.repeat(row);
        console.log(printRow);
    }
}

printChristmasTree(1);
//   | 
// * | *
console.log();
printChristmasTree(2);
//    | 
//  * | *
// ** | **
console.log();
printChristmasTree(3);
//     | 
//   * | *
//  ** | **
// *** | ***
console.log();
printChristmasTree(4);
//      | 
//    * | *
//   ** | **
//  *** | ***
// **** | ****
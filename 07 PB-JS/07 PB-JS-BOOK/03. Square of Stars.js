function printSquareOfStars(sideOfSquare) {
    sideOfSquare = parseInt(sideOfSquare);
    for (let i = 0; i < sideOfSquare; i++) {
        let printRow = "*";
        for (let j = 0; j < sideOfSquare - 1; j++) {
            printRow += " *";
        }
        console.log(printRow);
    }
}

printSquareOfStars(2);
// **
// **
console.log();
printSquareOfStars(3);
// ***
// ***
// ***
console.log();
printSquareOfStars(4);
// ****
// ****
// ****
// ****
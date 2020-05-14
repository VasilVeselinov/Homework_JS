function printTriangleOfDollars(heightOfTriangle) {
    heightOfTriangle = parseInt(heightOfTriangle);
    for (let i = 0; i < heightOfTriangle; i++) {
        let printRow = "$";
        for (let j = 0; j < i; j++) {
            printRow += " $";
        }
        console.log(printRow);
    }
}

printTriangleOfDollars(3);
console.log();
printTriangleOfDollars(4);
console.log();
printTriangleOfDollars(5);
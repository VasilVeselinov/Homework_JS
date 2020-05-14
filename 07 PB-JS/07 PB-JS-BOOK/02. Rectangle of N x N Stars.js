function printRectangle(sideOfRectangle) {
    sideOfRectangle = parseInt(sideOfRectangle);
    for (let index = 0; index < sideOfRectangle; index++) {
        console.log("*".repeat(sideOfRectangle));
    }
}

printRectangle(2);
console.log();
// **
// **
printRectangle(3);
// ***
// ***
// ***
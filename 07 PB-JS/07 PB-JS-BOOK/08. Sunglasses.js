function printSunglasses(n) {
    n = parseInt(n);
    let spaces = " ".repeat(n);
    let stars = "*".repeat(n * 2);
    let upAndDownPart = `${stars}${spaces}${stars}`;
    console.log(upAndDownPart);
    let frame = `*${"/".repeat(n * 2 - 2)}*`;
    let middle = Math.trunc((n - 1) / 2 - 1);
    for (let i = 0; i < n - 2; i++) {
        if (i == middle) {
            let middlePart = `${frame}${"|".repeat(n)}${frame}`;
            console.log(middlePart);
        } else {
            let middlePartWithSpaces = `${frame}${spaces}${frame}`;
            console.log(middlePartWithSpaces);
        }
    }
    console.log(upAndDownPart);
}

printSunglasses(3);
// ******   ******
// *////*|||*////*
// ******   ******
console.log();
printSunglasses(4);
// ********    ********
// *//////*||||*//////*
// *//////*    *//////*
// ********    ********
console.log();
printSunglasses(5);
// ********    ********
// *//////*||||*//////*
// *//////*    *//////*
// ********    ********
console.log();
printSunglasses(6);
// **********     **********
// *////////*     *////////*
// *////////*|||||*////////*
// *////////*     *////////*
// **********     **********
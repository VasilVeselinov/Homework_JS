function printHous(n) {
    n = parseInt(n);
    let stars = 1;
    if (n % 2 == 0) {
        stars++;
    }
    let middleForTheRoof = Math.ceil(n / 2);
    let padding = middleForTheRoof - 1;
    for (let i = 0; i < middleForTheRoof; i++) {
        let printDashes = "-".repeat(padding - i);
        let printStars = "*".repeat(stars);
        console.log(`${printDashes}${printStars}${printDashes}`);
        stars += 2;
    }
    let middleForTheBase = Math.floor(n / 2);
    for (let i = 0; i < middleForTheBase; i++) {
        let printStars =  "*".repeat(n - 2)
        console.log(`|${printStars}|`);
    }
}

console.log();
printHous(2);
// **
// ||
console.log();
printHous(3);
// -*-
// ***
// |*|
console.log();
printHous(4);
// -**-
// ****
// |**|
// |**|
console.log();
printHous(5);
// --*--
// -***-
// *****
// |***|
// |***|
console.log();
printHous(6);
// --***--
// -*****-
// *******
// |*****|
// |*****|
// |*****|
console.log();
printHous(7);
// ---*---
// --***--
// -*****-
// *******
// |*****|
// |*****|
// |*****|
console.log();
printHous(8);
// ---**---
// --****--
// -******-
// ********
// |******|
// |******|
// |******|
// |******|
function printDiamond(n) {
    n = parseInt(n);
    if (n <= 2) {
        console.log(`${"*".repeat(n)}`);
        return;
    }
    let stars = 1;
    let height = Math.floor(n / 2);
    let middleDashes = "-";
    if (n % 2 == 0) {
        stars++;
        height--;
        middleDashes += "-";
    }
    let numberOfDashes = (n - stars) / 2;
    console.log(`${"-".repeat(numberOfDashes)}${"*".repeat(stars)}${"-".repeat(numberOfDashes)}`);
    for (let i = 1; i < height; i++) {
        let printDashes = "-".repeat(numberOfDashes - i);
        console.log(`${printDashes}*${middleDashes}*${printDashes}`);
        middleDashes += "--";
    }
    console.log(`*${middleDashes}*`);
    for (let i = 1; i < height; i++) {
        let printDashes = "-".repeat(i);
        middleDashes = middleDashes.slice(2);
        console.log(`${printDashes}*${middleDashes}*${printDashes}`);
    }
    console.log(`${"-".repeat(numberOfDashes)}${"*".repeat(stars)}${"-".repeat(numberOfDashes)}`);
}

printDiamond(1);
// *
console.log();
printDiamond(2);
// **
console.log();
printDiamond(3);
// -*-
// *-*
// -*-
console.log();
printDiamond(4);
// -**-
// *--*
// -**-
console.log();
printDiamond(5);
// --*--
// -*-*-
// *---*
// -*-*-
// --*--
console.log();
printDiamond(6);
// --**--
// -*--*-
// *----*
// -*--*-
// --**--
console.log();
printDiamond(7);
// ---*---
// --*-*--
// -*---*-
// *-----*
// -*---*-
// --*-*--
// ---*---
console.log();
printDiamond(8);
// ---**---
// --*--*--
// -*----*-
// *------*
// -*----*-
// --*--*--
// ---**---
console.log();
printDiamond(9);
// ----*----
// ---*-*---
// --*---*--
// -*-----*-
// *-------*
// -*-----*-
// --*---*--
// ---*-*---
// ----*----
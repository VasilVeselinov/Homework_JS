function printNumbers(numberN) {
    numberN = Number(numberN);
    let number = 1;
    while (numberN >= number) {
        console.log(number);
        number = 2 * number + 1;
    }
}

printNumbers(3);
// 1
// 3
console.log();
printNumbers(8);
// 1
// 3
// 7
console.log();
printNumbers(17);
// 1
// 3
// 7
// 15
console.log();
printNumbers(31);
// 1
// 3
// 7
// 15
// 31
function printEvenPowersOfTwo(numberN) {
    numberN = Number(numberN);
    for (let index = 0; index <= numberN; index += 2) {
        let printNumber = Math.pow(2, index);
        console.log(printNumber);
    }
}

printEvenPowersOfTwo(5);
// 1
// 4
// 16
printEvenPowersOfTwo(6);
// 1
// 4
// 16
// 64
printEvenPowersOfTwo(3);
// 1
// 4
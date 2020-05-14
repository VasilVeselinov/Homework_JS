function printSpecialNumbers(number) {
    number = parseInt(number);
    let printResult = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (number % i == 0 && number % j == 0 && number % k == 0 && number % l == 0) {
                        printResult += "" + i + j + k + l + " ";
                    }
                }
            }
        }
    }
    console.log(printResult);
}

printSpecialNumbers(3); // 1111 1113 1131 1133 1311 1313 1331 1333 3111 3113 3131 3133 3311 3313 3331 3333
console.log();
printSpecialNumbers(11); // 1111
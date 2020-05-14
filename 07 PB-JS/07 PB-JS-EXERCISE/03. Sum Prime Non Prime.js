function printSumPrimeNonPrime(input) {
    let primeSum = 0,
        nonPrimeSum = 0;
    while (true) {
        let text = input.shift();
        if (text == "stop") {
            break;
        }
        let num = parseInt(text);
        if (num < 0) {
            console.log("Number is negative.");
        } else if (num == 2) {
            primeSum += num;
        } else if (num % 2 == 0 || num == 1) {
            nonPrimeSum += num;
        } else {
            let flag = true;
            for (let i = 3; i <= num / 2 && flag; i++) {
                if (num % i == 0) {
                    flag = false;
                }
            }
            if (flag) {
                primeSum += num;
            } else {
                nonPrimeSum += num;
            }
        }
    }
    console.log("Sum of all prime numbers is: " + primeSum);
    console.log("Sum of all non prime numbers is: " + nonPrimeSum);
}

printSumPrimeNonPrime([3, 9, 0, 7, 19, 4, "stop"]);
// Sum of all prime numbers is: 29
// Sum of all non prime numbers is: 13
console.log();
printSumPrimeNonPrime([30, 83, 33, -1, 20, "stop"]);
// Number is negative.
// Sum of all prime numbers is: 83
// Sum of all non prime numbers is: 83
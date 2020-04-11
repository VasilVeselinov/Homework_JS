function printStatistics(numberN) {
    numberN = parseInt(numberN);
    let percentageOfOddSingleDigits = 0;
    let numberOfSingleDigits = 0;
    let percentageOfEvenNumbers = 0;
    let numberOfEven = 0;
    let percentageOfOddNumbersEndingAt7 = 0;
    let numberOfEndingAt7 = 0;
    let percentageOfNumbersThatDivideTheNumber100 = 0;
    let numberOfDivideTheNumber100 = 0;
    let percentageOfTheNumbersToWhichTheNumber100IsDivided = 0;
    let numberOf100IsDivided = 0;
    for (let index = 1; index <= numberN; index++) {
        if (index % 2 != 0) {
            if(index / 10 < 1){
                numberOfSingleDigits++;
            }
            if (index % 10 == 7) {
                numberOfEndingAt7++;
            }
        }else{
            numberOfEven++;
        }
        if(100 % index == 0){
            numberOfDivideTheNumber100++;
        }
        if(index % 100 == 0){
            numberOf100IsDivided++;
        }
    }
    percentageOfOddSingleDigits = (numberOfSingleDigits / numberN) * 100;
    if(percentageOfOddSingleDigits > 0){
        console.log(`${percentageOfOddSingleDigits.toFixed(2)}%`)
    }
    percentageOfEvenNumbers = (numberOfEven / numberN) * 100;
    if(percentageOfEvenNumbers > 0){
        console.log(`${percentageOfEvenNumbers.toFixed(2)}%`)
    }
    percentageOfOddNumbersEndingAt7 = (numberOfEndingAt7 / numberN) * 100;
    if(percentageOfOddNumbersEndingAt7 > 0){
        console.log(`${percentageOfOddNumbersEndingAt7.toFixed(2)}%`)
    }
    percentageOfNumbersThatDivideTheNumber100 = (numberOfDivideTheNumber100 / numberN) * 100;
    if(percentageOfNumbersThatDivideTheNumber100 > 0){
        console.log(`${percentageOfNumbersThatDivideTheNumber100.toFixed(2)}%`)
    }
    percentageOfTheNumbersToWhichTheNumber100IsDivided = (numberOf100IsDivided / numberN) * 100;
    if(percentageOfTheNumbersToWhichTheNumber100IsDivided > 0){
        console.log(`${percentageOfTheNumbersToWhichTheNumber100IsDivided.toFixed(2)}%`)
    }
}

printStatistics(49);
// 10.20%
// 48.98%
// 10.20%
// 14.29%
console.log();
printStatistics(35);
// 14.29%
// 48.57%
// 8.57%
// 20.00%
console.log();
printStatistics(100);
// 5.00%
// 50.00%
// 10.00%
// 9.00%
// 1.00%
console.log();
printStatistics(1000);
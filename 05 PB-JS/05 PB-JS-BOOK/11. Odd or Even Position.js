function printInfo(numbers) {
    let numberN = numbers[0];
    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;
    for (let index = 1; index <= numberN; index++) {
        let currentNumber = Number(numbers[index]);
        if(index % 2 != 0){
            oddSum += currentNumber;
            if(oddMax < currentNumber){
                oddMax = currentNumber;
            }
            if(oddMin > currentNumber){
                oddMin = currentNumber;
            }
        }else{
            evenSum += currentNumber;
            if(evenMax < currentNumber){
                evenMax = currentNumber;
            }
            if(evenMin > currentNumber){
                evenMin = currentNumber;
            }
        }
    }
    if (oddSum == 0) {
        console.log(`OddSum=${oddSum},\nOddMin=No,\nOddMax=No,`);
    } else {
        console.log(`OddSum=${oddSum},\nOddMin=${oddMin},\nOddMax=${oddMax},`);
    }
    if (evenSum == 0) {
        console.log(`EvenSum=${evenSum},\nEvenMin=No,\nEvenMax=No`);
    } else {
        console.log(`EvenSum=${evenSum},\nEvenMin=${evenMin},\nEvenMax=${evenMax}`);
    }
}

printInfo([6, 2, 3, 5, 4, 2, 1]);
// OddSum=9,
// OddMin=2,
// OddMax=5,
// EvenSum=8,
// EvenMin=1,
// EvenMax=4
console.log();
printInfo([1, 1]);
// OddSum=1,
// OddMin=1,
// OddMax=1,
// EvenSum=0,
// EvenMin=No,
// EvenMax=No
console.log();
printInfo([0]);
// OddSum=0,
// OddMin=No,
// OddMax=No,
// EvenSum=0,
// EvenMin=No,
// EvenMax=No
console.log();
printInfo([2, 1.5, -2.5]);
// OddSum=1.5,
// OddMin=1.5,
// OddMax=1.5,
// EvenSum=-2.5,
// EvenMin=-2.5,
// EvenMax=-2.5
console.log();
printInfo([3, -1, -2, -3]);
// OddSum=-4,
// OddMin=-3,
// OddMax=-1,
// EvenSum=-2,
// EvenMin=-2,
// EvenMax=-2
console.log();
printInfo([5, 3, -2, 8, 11, -3]);
// OddSum=8,
// OddMin=-3,
// OddMax=8,
// EvenSum=9,
// EvenMin=-2,
// EvenMax=11
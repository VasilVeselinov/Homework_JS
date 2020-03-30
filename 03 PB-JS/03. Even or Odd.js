function numberIsOddOrEven(number){
    number = Number(number);
    if(number % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}

numberIsOddOrEven(2); // even
numberIsOddOrEven(3); // odd
numberIsOddOrEven(25); // odd
numberIsOddOrEven(1024); // even
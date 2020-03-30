function equalNumbers([number1, number2, number3]){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    number3 = parseFloat(number3);
    if(number1 == number2 && number1 == number3){
        console.log("yes");
    }else{
        console.log("no");
    }
}

equalNumbers([5, 5, 5]); // yes
equalNumbers([5, 4, 5]); // no
equalNumbers([1, 2, 3]); // no
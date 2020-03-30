function findingTheGreaterNumber(number1, number2){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    if(number1 >= number2){
        console.log(number1);
    }else{
        console.log(number2);
    }
}

findingTheGreaterNumber(5, 3); // 5
findingTheGreaterNumber(3, 5); // 5
findingTheGreaterNumber(10, 10); // 10
findingTheGreaterNumber(-5, 5); // 5
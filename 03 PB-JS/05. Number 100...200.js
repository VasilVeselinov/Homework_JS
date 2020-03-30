function numberInRange(number){
    number = Number(number);
    if(number < 100){
        console.log("Less than 100");
    }else if(number >= 100 && number <= 200) {
        console.log("Between 100 and 200");
    }else{
        console.log("Greater than 200");
    }
}

numberInRange(95); // Less than 100
numberInRange(120); // Between 100 and 200
numberInRange(210); // Greater than 200
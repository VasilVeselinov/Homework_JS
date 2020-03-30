function numberAsTextInRange(number){
    number = Number(Math.abs(number));
    if(number == 1){
        console.log("one");
    }else if(number == 2) {
        console.log("two");
    }else if(number == 3) {
        console.log("three");
    }else if(number == 4) {
        console.log("four");
    }else if(number == 5) {
        console.log("five");
    }else if(number == 6) {
        console.log("six");
    }else if(number == 7) {
        console.log("seven");
    }else if(number == 8) {
        console.log("eight");
    }else if(number == 9) {
        console.log("nine");
    }else{
        console.log("number too big");
    }
}

numberAsTextInRange(5); // five
numberAsTextInRange(1); // one
numberAsTextInRange(9); // nine
numberAsTextInRange(10); // number too big
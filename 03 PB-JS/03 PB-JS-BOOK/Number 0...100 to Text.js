function printingANumberAsText([number]){
    number = Number(number);
    let from0toteens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten","eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let forTens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "one hundred"];
    let units = "";
    let tens = "";
    if(number >= 0 && number < 20){
        console.log(from0toteens[number]);
    }else if(number % 10 == 0 && number <= 100){
        console.log(forTens[number / 10 - 2]);
    }else if(number >= 20 && number < 100){
        tens = forTens[Math.trunc(number / 10 - 2)];
        switch(number % 10){
            case 1: 
                units = "one";
                break;
            case 2: 
                units = "two";
                break;
            case 3: 
                units = "three";
                break;
            case 4: 
                units = "four";
                break;
            case 5: 
                units = "five";
                break;
            case 6: 
                units = "six";
                break;
            case 7: 
                units = "seven";
                break;
            case 8: 
                units = "eight";
                break;
            case 9: 
                units = "nine";
                break;
        }
        console.log(`${tens} ${units}`);
    }
}

printingANumberAsText([0]); // zero
printingANumberAsText([11]); // eleven
printingANumberAsText([19]); // nineteen
printingANumberAsText([34]); // thirty four
printingANumberAsText([99]); // ninety nine
printingANumberAsText([9]); // nine
printingANumberAsText([100]); // one hundred
printingANumberAsText([110]); // one hundred
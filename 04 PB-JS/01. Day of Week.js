function printDayAsText(number) {
    number = parseInt(number);
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}

printDayAsText(1); // Monday
printDayAsText(3); // Wednesday
printDayAsText(-3); // Error
printDayAsText(10); // Error
printDayAsText(7); // Sunday
function calculatingTheBill(fruit, day, quantity) {
    quantity = parseFloat(quantity);
    let isOnWeekdays;
    let isError = false;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            isOnWeekdays = true;
            break;
        case "Saturday":
        case "Sunday":
            isOnWeekdays = false;
            break;
        default:
            isError = true;
            break;
    }
    if (isError) {
        console.log("error");
    } else {
        if (isOnWeekdays) {
            switch (fruit) {
                case "banana":
                    console.log((quantity * 2.50).toFixed(2));
                    break;
                case "apple":
                    console.log((quantity * 1.20).toFixed(2));
                    break;
                case "orange":
                    console.log((quantity * 0.85).toFixed(2));
                    break;
                case "grapefruit":
                    console.log((quantity * 1.45).toFixed(2));
                    break;
                case "kiwi":
                    console.log((quantity * 2.70).toFixed(2));
                    break;
                case "pineapple":
                    console.log((quantity * 5.50).toFixed(2));
                    break;
                case "grapes":
                    console.log((quantity * 3.85).toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
        } else {
            switch (fruit) {
                case "banana":
                    console.log((quantity * 2.70).toFixed(2));
                    break;
                case "apple":
                    console.log((quantity * 1.25).toFixed(2));
                    break;
                case "orange":
                    console.log((quantity * 0.90).toFixed(2));
                    break;
                case "grapefruit":
                    console.log((quantity * 1.60).toFixed(2));
                    break;
                case "kiwi":
                    console.log((quantity * 3.00).toFixed(2));
                    break;
                case "pineapple":
                    console.log((quantity * 5.60).toFixed(2));
                    break;
                case "grapes":
                    console.log((quantity * 4.20).toFixed(2));
                    break;
                default:
                    console.log("error");
                    break;
            }
        }
    }
}

calculatingTheBill("apple", "Tuesday", 2); // 2.40
calculatingTheBill("orange", "Sunday", 3); // 2.70
calculatingTheBill("kiwi", "Monday", 2.5); // 6.75
calculatingTheBill("grapes", "Saturday", 0.5); // 2.10 
calculatingTheBill("tomato", "Monday", 0.5); // error
calculatingTheBill("tomato", "Another day", 0.5); // error
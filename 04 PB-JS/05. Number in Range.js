function numberIsRange(number) {
    number = Number(number);
    if (number != 0 && number >= -100 && number <= 100) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberIsRange(-25); // Yes
numberIsRange(0); // No
numberIsRange(25); // Yes
numberIsRange(-101); // No
numberIsRange(101); // No
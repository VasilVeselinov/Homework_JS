function numberValidation(number) {
    number = parseInt(number);
    if (!(number == 0 || (number >= 100 && number <= 200))) {
        console.log("invalid");
    }
}

numberValidation(75); // invalid
numberValidation(150); //
numberValidation(220); // invalid
numberValidation(199); //
numberValidation(-1); // invalid
numberValidation(100); //
numberValidation(200); //
numberValidation(0); //
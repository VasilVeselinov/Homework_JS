function fromInchesToCentimeters(inputUser) {
    inputUser = parseFloat(inputUser);
    let result = inputUser * 2.54;
    console.log(result);
}

fromInchesToCentimeters(5); // 12.7
function convertInchesToCentimeters([inches]){
    inches = parseFloat(inches);
    let centimeters = inches * 2.54;
    console.log(`Centimeters = ${centimeters}`);
}

convertInchesToCentimeters([5]); // Centimeters = 12.7
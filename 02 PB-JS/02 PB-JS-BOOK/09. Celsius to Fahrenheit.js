function convertCelsiusToFahrenheit([gradusCelsius]){
    gradusCelsius = parseFloat(gradusCelsius);
    let gradusFahrenheit = gradusCelsius * 1.8 + 32;
    console.log(gradusFahrenheit.toFixed(2));
}

convertCelsiusToFahrenheit([25]); // 77.00
convertCelsiusToFahrenheit([0]); // 32.00
convertCelsiusToFahrenheit([-5.5]); //22.10
convertCelsiusToFahrenheit([32.3]); // 90.14
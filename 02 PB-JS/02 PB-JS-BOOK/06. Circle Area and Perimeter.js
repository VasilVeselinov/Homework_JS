function calculateCircleAreaAndParameter([arg]) {
    let radius = parseFloat(arg);
    let area = Math.PI * Math.pow(radius,2);
    let parameter = 2 * Math.PI * radius;
    console.log(`Area = ${area}`);
    console.log(`Perimeter = ${parameter}`);
}

calculateCircleAreaAndParameter([10]); // Area = 314.1592653589793
                                       // Perimeter = 62.83185307179586
calculateCircleAreaAndParameter([3]); // Area = 28.274333882308138
                                      // Perimeter = 18.84955592153876
calculateCircleAreaAndParameter([4.5]); // Area = 63.61725123519331
                                        // Perimeter = 28.274333882308138
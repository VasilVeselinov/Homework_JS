function calculateAreaAndParameter(x1, y1, x2, y2) {
    let sideA = Math.abs(x2 - x1);
    let sideB = Math.abs(y2 - y1);
    let area = sideA * sideB;
    let parameter = 2 * sideA + 2 * sideB;
    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));
}

calculateAreaAndParameter(60, 20, 10, 50); // 1500.00
                                           // 160.00
calculateAreaAndParameter(30, 40, 70, -10);  // 2000.00
                                             // 180.00
calculateAreaAndParameter(600.25, 500,75, 100.50, -200.5);  // 209837.38
                                                            // 1849.50
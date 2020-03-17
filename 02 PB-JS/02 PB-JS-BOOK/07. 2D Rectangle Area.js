function calculateRectangleAreaAndParameter([x1, y1, x2, y2]) {
    x1 = parseFloat(x1);
    y1 = parseFloat(y1);
    x2 = parseFloat(x2);
    y1 = parseFloat(y1);
    let sideA = Math.max(x1, x2) - Math.min(x1, x2);
    let sideB = Math.max(y1, y2) - Math.min(y1, y2);
    let area = sideA * sideB;
    console.log(area.toFixed(2));
    let parameter = 2 * sideA + 2 * sideB;
    console.log(parameter.toFixed(2));
}

calculateRectangleAreaAndParameter([60, 20, 10, 50]); // area -> 1500.00
                                                     // parameter -> 160.00
calculateRectangleAreaAndParameter([600.25, 500.75, 100.50, -200.5]); // area -> 350449.69
                                                                      // parameter -> 2402.00
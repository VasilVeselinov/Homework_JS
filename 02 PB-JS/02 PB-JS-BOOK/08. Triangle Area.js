function calculateAreaOfTriangle([side, height]) {
    side = parseFloat(side);
    height = parseFloat(height);
    let area = (side * height) / 2;
    console.log(`Triangle area = ${area.toFixed(2)}`);
}

calculateAreaOfTriangle([20, 30]); // Triangle area = 300.00
calculateAreaOfTriangle([15, 35]); // Triangle area = 262.50
calculateAreaOfTriangle([7.75, 8.45]); // Triangle area = 32.74
calculateAreaOfTriangle([1.23456, 4.56789]); // Triangle area = 2.82
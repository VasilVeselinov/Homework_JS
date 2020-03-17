function calculateTrapezoidArea([arg1, arg2, arg3]) {
    let sideA = parseFloat(arg1);
    let sideB = parseFloat(arg2);
    let height = parseFloat(arg3);
    let area = ((sideA + sideB) * height) / 2;
    console.log("Trapezoid area = " + area);
}

calculateTrapezoidArea([3, 4, 5]); // Trapezoid area = 17.5
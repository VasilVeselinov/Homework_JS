function converFromRadiansToDegrees(angleInRadians) {
    let resultInDegrees = angleInRadians * 180 / Math.PI;
    console.log(resultInDegrees.toFixed(0));
}

converFromRadiansToDegrees(3.1416); // 180
converFromRadiansToDegrees(6.2832); // 360
converFromRadiansToDegrees(0.7854); // 45
converFromRadiansToDegrees(0.5236); // 30
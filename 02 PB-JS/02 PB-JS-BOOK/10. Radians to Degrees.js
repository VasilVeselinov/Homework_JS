function convertRadianToGradus([radian]){
    let angleInRadians = parseFloat(radian);
    let resultInDegrees = angleInRadians * 180 / Math.PI;
    console.log(resultInDegrees.toFixed(0));
}

convertRadianToGradus([3.1416]); // 180
convertRadianToGradus([6.2832]); // 360
convertRadianToGradus([0.7854]); // 45
convertRadianToGradus([0.5236]); // 30
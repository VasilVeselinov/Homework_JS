function calcolateArea(typeOfGeometricFigure, sideA, sideB){
    sideA = parseFloat(sideA);
    sideB = parseFloat(sideB);
    if(typeOfGeometricFigure === "square"){
        console.log((sideA * sideA).toFixed(3));
    }else if(typeOfGeometricFigure === "rectangle") {
        console.log((sideA * sideB).toFixed(3));
    }else if(typeOfGeometricFigure === "circle") {
        console.log((sideA * sideA * Math.PI).toFixed(3));
    }else if(typeOfGeometricFigure === "triangle"){
        console.log(((sideA * sideB) / 2).toFixed(3));
    }
}

calcolateArea("square", 5, "sideB"); // 25.000
calcolateArea("rectangle", 7, 2.5); // 17.500
calcolateArea("circle", 6, "sideB"); // 113.097
calcolateArea("triangle", 4.5, 20); // 45.000
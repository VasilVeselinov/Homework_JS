function convertOfDistance([value, from, to]){
    value = Number(value);
    from = String(from);
    to = String(to);
    let result = 0;
    if(from == "mm"){
        result = value / 1000;
    }else if(from == "cm"){
        result = value / 100;
    }else if(from == "m"){
        result = value / 1;
    }else if(from == "mi"){
        result = value / 0.000621371192;
    }else if(from == "in"){
        result = value / 39.3700787;
    }else if(from == "km"){
        result = value / 0.001;
    }else if(from == "ft"){
        result = value / 3.2808399;
    }else if(from == "yd"){
        result = value / 1.0936133;
    }
    if(to == "mm"){
        result = result * 1000;
    }else if(to == "cm"){
        result = result * 100;
    }else if(to == "m"){
        result = result * 1;
    }
    else if(to == "mi"){
        result = result * 0.000621371192;
    }
    else if(to == "in"){
        result = result * 39.3700787;
    }
    else if(to == "km"){
        result = result * 0.001;
    }
    else if(to == "ft"){
        result = result * 3.2808399;
    }else if(to == "yd"){
        result = result * 1.0936133;
    }
    console.log(result);
}

convertOfDistance(12, "mm", "m"); // 0.012
convertOfDistance(150, "m", "cm"); // 15000
convertOfDistance(45, "cm", "mm"); // 450
convertOfDistance(45.5, "cm", "mm"); // 455
convertOfDistance(12, "km", "ft"); // 39370.0788
convertOfDistance(150, "mi", "in"); // 9503999.99393599
convertOfDistance(450, "yd", "km"); // 0.41147999937455
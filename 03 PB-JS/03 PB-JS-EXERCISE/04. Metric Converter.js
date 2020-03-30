function convertOfDistance(value, from, to){
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
    }
    if(to == "mm"){
        result = result * 1000;
    }else if(to == "cm"){
        result = result * 100;
    }else if(to == "m"){
        result = result * 1;
    }
    console.log(result.toFixed(3));
}

convertOfDistance(12, "mm", "m"); // 0.012
convertOfDistance(150, "m", "cm"); // 15000.000
convertOfDistance(45, "cm", "mm"); // 450.000
convertOfDistance(45.5, "cm", "mm"); // 455.000
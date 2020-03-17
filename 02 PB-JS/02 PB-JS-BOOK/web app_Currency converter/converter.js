function converter() {
    let value = 0;
    if(document.getElementById("BGN").value > 0){
        value = parseFloat(document.getElementById("BGN").value) * 1;
    }else if(document.getElementById("USD").value > 0){
        value = parseFloat(document.getElementById("USD").value) * 1.78094;
    }else if(document.getElementById("EUR").value > 0){
        value = parseFloat(document.getElementById("EUR").value) * 1.95583;
    }else if(document.getElementById("GBP").value > 0){
        value = parseFloat(document.getElementById("GBP").value) * 2.15345;
    }
    let result = 0;
    const floatPoint = 4;
    if(document.getElementById("toBGN").checked == true){
        result = (value / 1).toFixed(floatPoint);
        document.getElementById("result").value = result;
    }else if(document.getElementById("toUSD").checked == true){
        result = (value / 1.78094).toFixed(floatPoint);
        document.getElementById("result").value = result;
    }else if(document.getElementById("toEUR").checked == true){
        result = (value / 1.95583).toFixed(floatPoint);
        document.getElementById("result").value = result;
    }else if(document.getElementById("toGBP").checked == true){
        result = (value / 2.15345).toFixed(floatPoint);
        document.getElementById("result").value = result;
    }else{
        document.getElementById("result").value = result;
    }
}
function converterOfCurrency([value, from, to]) {
    value = parseFloat(value);
    from = String(from);
    to = String(to);
    if(from == "BGN"){
        value = value * 1;
    }else if(from == "USD"){
        value = value * 1.79549;
    }else if(from == "EUR"){
        value = value * 1.95583;
    }else if(from == "GBP"){
        value = value * 2.53405;
    }
    let result;
    if(to == "BGN"){
        result = value / 1;
        console.log(`${result.toFixed(2)} BGN`);
    }else if(to == "USD"){
        result = value / 1.79549;
        console.log(`${result.toFixed(2)} USD`);
    }else if(to == "EUR"){
        result = value / 1.95583;
        console.log(`${result.toFixed(2)} EUR`);
    }else if(to == "GBP"){
        result = value / 2.53405;
        console.log(`${result.toFixed(2)} GBP`);
    }
}

converterOfCurrency([20, "USD", "BGN"]); // 35.91 BGN
converterOfCurrency([100, "BGN", "EUR"]); // 51.13 EUR
converterOfCurrency([12.35, "EUR", "GBP"]); // 9.53 GBP
converterOfCurrency([150.35, "USD", "EUR"]); // 138.02 EUR
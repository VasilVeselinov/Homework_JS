function calculatingTheCommission(city, sales) {
    sales = parseFloat(sales);
    let percentOfSales = 0;
    let hasError = false;
    if (city == "Sofia") {
        if (sales < 0) {
            hasError = true;
        } else if (sales >= 0 && sales <= 500) {
            percentOfSales = 5;
        } else if (sales > 500 && sales <= 1000) {
            percentOfSales = 7;
        } else if (sales > 1000 && sales <= 10000) {
            percentOfSales = 8;
        } else {
            percentOfSales = 12;
        }
    } else if (city == "Varna") {
        if (sales < 0) {
            hasError = true;
        } else if (sales >= 0 && sales <= 500) {
            percentOfSales = 4.5;
        } else if (sales > 500 && sales <= 1000) {
            percentOfSales = 7.5;
        } else if (sales > 1000 && sales <= 10000) {
            percentOfSales = 10;
        } else {
            percentOfSales = 13;
        }
    } else if (city == "Plovdiv") {
        if (sales < 0) {
            hasError = true;
        } else if (sales >= 0 && sales <= 500) {
            percentOfSales = 5.5;
        } else if (sales > 500 && sales <= 1000) {
            percentOfSales = 8;
        } else if (sales > 1000 && sales <= 10000) {
            percentOfSales = 12;
        } else {
            percentOfSales = 14.5;
        }
    } else {
        hasError = true;
    }
    if (hasError) {
        console.log("error");
    } else {
        let commission = sales * (percentOfSales / 100);
        console.log(commission.toFixed(2));
    }
}

calculatingTheCommission("Sofia", 1500); // 120.00
calculatingTheCommission("Plovdiv", 499.99); // 27.50
calculatingTheCommission("Varna", 3874.50); // 387.45
calculatingTheCommission("Kaspichan", 50); // error
calculatingTheCommission("Varna", -50); // error
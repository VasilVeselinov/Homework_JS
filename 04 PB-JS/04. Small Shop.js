function calculateCostOfProduct(product, city, quantity) {
    product = String(product);
    city = String(city);
    quantity = parseFloat(quantity);
    let productPrice = 0;
    switch (product) {
        case "coffee":
            if (city == "Sofia") {
                productPrice = 0.50;
            } else if (city == "Plovdiv") {
                productPrice = 0.40;
            } else if (city == "Varna") {
                productPrice = 0.45;
            };
            break;
        case "water":
            if (city == "Sofia") {
                productPrice = 0.80;
            } else if (city == "Plovdiv") {
                productPrice = 0.70;
            } else if (city == "Varna") {
                productPrice = 0.70;
            };
            break;
        case "beer":
            if (city == "Sofia") {
                productPrice = 1.20;
            } else if (city == "Plovdiv") {
                productPrice = 1.15;
            } else if (city == "Varna") {
                productPrice = 1.10;
            };
            break;
        case "sweets":
            if (city == "Sofia") {
                productPrice = 1.45;
            } else if (city == "Plovdiv") {
                productPrice = 1.30;
            } else if (city == "Varna") {
                productPrice = 1.35;
            };
            break;
        case "peanuts":
            if (city == "Sofia") {
                productPrice = 1.60;
            } else if (city == "Plovdiv") {
                productPrice = 1.50;
            } else if (city == "Varna") {
                productPrice = 1.55;
            };
            break;
    }
    console.log(quantity * productPrice);
}

calculateCostOfProduct("coffee", "Varna", 2); // 0.9
calculateCostOfProduct("peanuts", "Plovdiv", 1); // 1.5
calculateCostOfProduct("beer", "Sofia", 6); // 7.2
calculateCostOfProduct("water", "Plovdiv", 3); // 2.1
calculateCostOfProduct("sweets", "Sofia", 2.23); // 3.2335
calculateCostOfProduct("water", "Sofia", 1.5); // 1.2
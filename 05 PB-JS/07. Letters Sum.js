function calculateSumOfTheLettersOfProductName(productName, controlNumber, budget) {
    productName = String(productName);
    controlNumber = Number(controlNumber);
    budget = Number(budget);
    let sumOfLetters = 0;
    for (let index = 0; index < productName.length; index++) {
        switch (productName.charAt(index)) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "y":
                sumOfLetters += 3;
                break;
            case " ":
                break;
            default:
                sumOfLetters += 1;
                break;
        }
    }
    let costOfProduct = sumOfLetters * controlNumber;
    if (budget >= costOfProduct) {
        console.log(`${productName} bought. Money left: ${(budget - costOfProduct).toFixed(2)}`);
    } else {
        console.log(`Cannot buy ${productName}. Product value: ${costOfProduct.toFixed(2)}`);
    }
}

calculateSumOfTheLettersOfProductName("apple", 2, 20); // apple bought. Money left: 2.00
calculateSumOfTheLettersOfProductName("milk", 1.4, 8); // Cannot buy milk. Product value: 8.40
calculateSumOfTheLettersOfProductName("apple", 2, 18); // apple bought. Money left: 0.00
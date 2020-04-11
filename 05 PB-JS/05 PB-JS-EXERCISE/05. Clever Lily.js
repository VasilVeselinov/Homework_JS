function calculateHowMuchMoneySheRaisedAndWhetherTheyWereEnough(age, priceWashingMachine, priceToy) {
    age = parseInt(age);
    priceWashingMachine = parseFloat(priceWashingMachine);
    priceToy = parseInt(priceToy);
    let total = 0;
    let money = 0;
    let toy = 0;
    let spend = 0;
    for (let index = 1; index <= age; index++) {
        if (index % 2 == 0) {
            money += 10;
            spend++;
            total += money;
        } else {
            toy++;
        }
    }
    let totalToy = priceToy * toy;
    total = total + totalToy - spend;
    if (total >= priceWashingMachine) {
        console.log(`Yes! ${(total - priceWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashingMachine - total).toFixed(2)}`, );
    }
}

calculateHowMuchMoneySheRaisedAndWhetherTheyWereEnough(10, 170.00, 6); // Yes! 5.00
calculateHowMuchMoneySheRaisedAndWhetherTheyWereEnough(21, 1570.98, 3); // No! 997.98
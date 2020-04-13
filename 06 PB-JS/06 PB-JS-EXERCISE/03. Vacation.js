function calculateSaveMoneyForAtrip(input) {
    let needMoney = Number(input.shift());
    let currentBalans = Number(input.shift());
    let counterForSpend = 0;
    let counterDay = 0;
    while (currentBalans < needMoney) {
        let text = input.shift();
        let money = Number(input.shift());
        if (text == "spend") {
            if (money > currentBalans) {
                currentBalans = 0;
            } else {
                currentBalans -= money;
            }
            counterForSpend++;
        } else {
            currentBalans += money;
            counterForSpend = 0;
        }
        counterDay++;
        if (counterForSpend == 5) {
            break;
        }
    }
    if (currentBalans >= needMoney) {
        console.log(`You saved the money for ${counterDay} days.`);
    } else {
        console.log(`You can't save the money.\n${counterDay}`);
    }
}

calculateSaveMoneyForAtrip([2000, 1000, "spend", 1200, "save", 2000]);
// You saved the money for 2 days.
console.log();
calculateSaveMoneyForAtrip([110, 60, "spend", 10, "spend", 10, "spend", 10, "spend", 10, "spend", 10]);
// You can't save the money.
// 5
console.log();
calculateSaveMoneyForAtrip([250, 150, "spend", 50, "spend", 50, "save", 100, "save", 100]);
// You saved the money for 4 days.
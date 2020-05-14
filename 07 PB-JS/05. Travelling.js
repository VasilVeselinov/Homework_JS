function calculatesIfThereIsEnoughMoneySaved(input) {
    while (true) {
        let country = input.shift();
        if (country == "End") {
            break;
        }
        let budget = Number(input.shift());
        while (true) {
            let saveMoney = Number(input.shift());
            budget -= saveMoney;
            if (budget <= 0) {
                console.log(`Going to ${country}!`);
                break;
            }
        }
    }
}

calculatesIfThereIsEnoughMoneySaved([
    "Greece", 1000, 200, 200, 300, 100, 150, 240,
    "Spain", 1200, 300, 500, 193, 423,
    "End"
]);
// Going to Greece!
// Going to Spain!
console.log();
calculatesIfThereIsEnoughMoneySaved([
    "France", 2000, 300, 300, 200, 400, 190, 258, 360,
    "Portugal", 1450, 400, 400, 200, 300, 300,
    "Egypt", 1900, 1000, 280, 300, 500,
    "End"
]);
// Going to France!
// Going to Portugal!
// Going to Egypt!
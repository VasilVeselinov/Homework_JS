function calculateEnoughOrNotEnoughTheBudget(flower, quantity, budget) {
    quantity = parseInt(quantity);
    budget = parseFloat(budget);
    let totalCost = 0;
    switch (flower) {
        case "Roses":
            totalCost = quantity * 5;
            if (quantity > 80) {
                totalCost -= totalCost * 0.10;
            }
            break;
        case "Dahlias":
            totalCost = quantity * 3.80;
            if (quantity > 90) {
                totalCost -= totalCost * 0.15;
            }
            break;
        case "Tulips":
            totalCost = quantity * 2.80;
            if (quantity > 80) {
                totalCost -= totalCost * 0.15;
            }
            break;
        case "Narcissus":
            totalCost = quantity * 3;
            if (quantity < 120) {
                totalCost += totalCost * 0.15;
            }
            break;
        case "Gladiolus":
            totalCost = quantity * 2.50;
            if (quantity < 80) {
                totalCost += totalCost * 0.20;
            }
            break;
    }
    if (budget >= totalCost) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${(budget - totalCost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalCost - budget).toFixed(2)} leva more.`)
    }
}

calculateEnoughOrNotEnoughTheBudger("Roses", 55, 250); // Not enough money, you need 25.00 leva more.
calculateEnoughOrNotEnoughTheBudger("Tulips", 88, 260); // Hey, you have a great garden with 88 Tulips and 50.56 leva left.
calculateEnoughOrNotEnoughTheBudger("Narcissus", 119, 360); // Not enough money, you need 50.55 leva more.
calculateEnoughOrNotEnoughTheBudger("Gladiolus", 64, 160); // Not enough money, you need 32.00 leva more.
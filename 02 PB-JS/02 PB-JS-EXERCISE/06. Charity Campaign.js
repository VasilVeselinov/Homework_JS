function calculateTheCharityAmount(days, confectioners, cakes, waffles, pancakes) {
    days = Number(days);
    confectioners = Number(confectioners);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);
    let totalAmountForDay = confectioners * (cakes * 45 + waffles * 5.80 + pancakes * 3.20);
    let total = days * totalAmountForDay;
    total = total - (0.125 * total);
    console.log(`${total.toFixed(2)}`)
}

calculateTheCharityAmount(20, 8, 14, 30, 16);
calculateTheCharityAmount(131, 5, 9, 33, 46);
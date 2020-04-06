function calculatesTotalTicketRevenueForAFullHall(typeOfProjection, rows, columns) {
    rows = parseInt(rows);
    columns = parseInt(columns);
    let total = 0;
    if (typeOfProjection == "Premiere") {
        total = rows * columns * 12.00;
    } else if (typeOfProjection == "Normal") {
        total = rows * columns * 7.50;
    } else if (typeOfProjection == "Discount") {
        total = rows * columns * 5.00;
    }
    console.log(`${total.toFixed(2)} leva`);
}

calculatesTotalTicketRevenueForAFullHall("Premiere", 10, 12); // 1440.00 leva
calculatesTotalTicketRevenueForAFullHall("Normal", 21, 13); // 2047.50 leva
calculatesTotalTicketRevenueForAFullHall("Discount", 12, 30); // 1800.00 leva
function priceForHotelStay(daysToStay, typeOfRoom, rating) {
    daysToStay = parseInt(daysToStay);
    let priceForHotelStay = 0;
    let оvernights = daysToStay - 1;
    if (typeOfRoom == "room for one person") {
        let priceForNight = 18;
        priceForHotelStay = оvernights * priceForNight;
    } else if (typeOfRoom == "apartment") {
        let priceForNight = 25;
        priceForHotelStay = оvernights * priceForNight;
        if (оvernights < 10) {
            priceForHotelStay -= priceForHotelStay * 0.30;
        } else if (оvernights >= 10 && оvernights <= 15) {
            priceForHotelStay -= priceForHotelStay * 0.35;
        } else {
            priceForHotelStay -= priceForHotelStay * 0.50;
        }
    } else if (typeOfRoom == "president apartment") {
        let priceForNight = 35;
        priceForHotelStay = оvernights * priceForNight;
        if (оvernights < 10) {
            priceForHotelStay -= priceForHotelStay * 0.10;
        } else if (оvernights >= 10 && оvernights <= 15) {
            priceForHotelStay -= priceForHotelStay * 0.15;
        } else {
            priceForHotelStay -= priceForHotelStay * 0.20;
        }
    }
    if (rating == "positive") {
        priceForHotelStay += priceForHotelStay * 0.25;
    } else {
        priceForHotelStay -= priceForHotelStay * 0.10;
    }
    console.log(priceForHotelStay.toFixed(2));
}

priceForHotelStay(14, "apartment", "positive"); // 264.06
priceForHotelStay(30, "president apartment", "negative"); // 730.80
priceForHotelStay(14, "apartment", "negative"); // 190.13
priceForHotelStay(30, "president apartment", "positive"); // 1015.00
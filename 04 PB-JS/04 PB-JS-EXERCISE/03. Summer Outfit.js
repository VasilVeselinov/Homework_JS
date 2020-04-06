function printRecommendedClothes(degrees, timeFromDay) {
    degrees = Number(degrees);
    let outfit = "";
    let shoes = "";
    if (timeFromDay == "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (timeFromDay == "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

printRecommendedClothes(16, "Morning"); // It's 16 degrees, get your Sweatshirt and Sneakers.
printRecommendedClothes(22, "Afternoon"); // It's 22 degrees, get your T-Shirt and Sandals.
printRecommendedClothes(26, "Evening"); // It's 26 degrees, get your Shirt and Moccasins.
printRecommendedClothes(18, "Evening"); // It's 18 degrees, get your Shirt and Moccasins.
printRecommendedClothes(15, "Afternoon"); // It's 15 degrees, get your Shirt and Moccasins.
printRecommendedClothes(26, "Morning"); // It's 26 degrees, get your T-Shirt and Sandals.
printRecommendedClothes(20, "Morning"); // It's 20 degrees, get your Shirt and Moccasins.
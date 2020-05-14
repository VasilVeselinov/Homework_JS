function calculatesThePercentageOfTicketsForEachTypeOfTicketSold(input) {
    let inputCommand = input.shift();
    let countOfSaleTicket = 0;
    let countOfSaleTicketTypeStudent = 0;
    let countOfSaleTicketTypeStandard = 0;
    let countOfSaleTicketTypeKid = 0;
    while (inputCommand !== "Finish") {
        let nameOfFilm = inputCommand;
        let capacityOfTheSalon = parseInt(input.shift());
        let numberOfFreePlaces = capacityOfTheSalon;
        let percentageOfSaleTicketForTheFilm = 0;
        let countCurrentSaleTicket = 0;
        while (numberOfFreePlaces > 0) {
            let typeOfTicket = input.shift();
            if (typeOfTicket == "End") {
                break;
            } else if (typeOfTicket == "student") {
                countOfSaleTicketTypeStudent++;
            } else if (typeOfTicket == "standard") {
                countOfSaleTicketTypeStandard++;
            } else if (typeOfTicket == "kid") {
                countOfSaleTicketTypeKid++;
            }
            countCurrentSaleTicket++;
            numberOfFreePlaces--;
        }
        percentageOfSaleTicketForTheFilm = (countCurrentSaleTicket / capacityOfTheSalon) * 100;
        console.log(`${nameOfFilm} - ${percentageOfSaleTicketForTheFilm.toFixed(2)}% full.`);
        countOfSaleTicket += countCurrentSaleTicket;
        inputCommand = input.shift();
    }
    let percentageOfSaleTicketForTypeStudent = (countOfSaleTicketTypeStudent / countOfSaleTicket) * 100;
    let percentageOfSaleTicketForTypeStandart = (countOfSaleTicketTypeStandard / countOfSaleTicket) * 100;
    let percentageOfSaleTicketForTypeKid = (countOfSaleTicketTypeKid / countOfSaleTicket) * 100;
    console.log(`Total tickets: ${countOfSaleTicket}\n` +
        `${percentageOfSaleTicketForTypeStudent.toFixed(2)}% student tickets.\n` +
        `${percentageOfSaleTicketForTypeStandart.toFixed(2)}% standard tickets.\n` +
        `${percentageOfSaleTicketForTypeKid.toFixed(2)}% kids tickets.`);
}

calculatesThePercentageOfTicketsForEachTypeOfTicketSold(
    ["Taxi", 10,
        "standard", "kid", "student", "student", "standard", "standard", "End",
        "Scary Movie", 6,
        "student", "student", "student", "student", "student", "student",
        "Finish"
    ]);
// Taxi - 60.00% full.
// Scary Movie - 100.00% full.
// Total tickets: 12
// 66.67% student tickets.
// 25.00% standard tickets.
// 8.33% kids tickets.
console.log();
calculatesThePercentageOfTicketsForEachTypeOfTicketSold([
    "The Matrix", 20,
    "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End",
    "The Green Mile", 17,
    "student", "standard", "standard", "student", "standard", "student", "End",
    "Amadeus", 3,
    "standard", "standard", "standard",
    "Finish"
]);
// The Matrix - 40.00% full.
// The Green Mile - 35.29% full.
// Amadeus - 100.00% full.
// Total tickets: 17
// 41.18% student tickets.
// 47.06% standard tickets.
// 11.76% kids tickets.
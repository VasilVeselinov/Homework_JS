function personaleTitle(age, gender) {
    age = Number(age);
    if (age >= 16) {
        if (gender === "m") {
            console.log("Mr.");
        } else {
            console.log("Ms.");
        }
    } else {
        if (gender === "m") {
            console.log("Master");
        } else {
            console.log("Miss");
        }
    }
}

personaleTitle(10, "m"); // Master
personaleTitle(37, "m"); // Mr.
personaleTitle(12, "f"); // Miss
personaleTitle(40, "f"); // Ms.
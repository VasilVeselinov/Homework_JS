function calculateAverageScore(input) {
    let numberOfUnsatisfactoryRatings = Number(input.shift());
    let counterUR = 0;
    let averageScore = 0;
    let counter = 0;
    let currentText = input.shift();
    let lastProblem = "";
    while (true) {
        if (currentText == "Enough") {
            break;
        } else {
            lastProblem = currentText;
        }
        counter++;
        let currentGread = Number(input.shift());
        averageScore += currentGread;
        if (currentGread <= 4) {
            counterUR++;
        }
        if (counterUR == numberOfUnsatisfactoryRatings) {
            break;
        }
        currentText = input.shift();
    }
    if (counterUR == numberOfUnsatisfactoryRatings) {
        console.log(`You need a break, ${numberOfUnsatisfactoryRatings} poor grades.`);
    } else {
        console.log(`Average score: ${(averageScore / counter).toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

calculateAverageScore([3, "Money", 6, "Story", 4, "Spring Time", 5, "Bus", 6, "Enough"]);
// Average score: 5.25
// Number of problems: 4
// Last problem: Bus
console.log();
calculateAverageScore([2, "Income", 3, "Game Info", 6, "Best Player", 4]);
// You need a break, 2 poor grades.
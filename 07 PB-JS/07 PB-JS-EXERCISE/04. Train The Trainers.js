function calculate(input) {
    let n = parseInt(input.shift());
    let finalGrade = 0;
    let counter = 0;
    while (true) {
        let text = input.shift();
        let totalGrade = 0;
        if (text == "Finish") {
            finalGrade /= counter;
            console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);
            break;
        }
        for (let i = 0; i < n; i++) {
            let grade = Number(input.shift());
            totalGrade += grade;
        }
        totalGrade /= n;
        console.log(`${text} - ${totalGrade.toFixed(2)}.`);
        counter++;
        finalGrade += totalGrade;
    }
}

calculate([2, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);
// While-Loop - 5.75.
// For-Loop - 5.75.
// Student's final assessment is 5.75.
console.log();
calculate([3, "Arrays", 4.53, 5.23, 5.00, "Lists", 5.83, 6.00, 5.42, "Finish"]);
// Arrays - 4.92.
// Lists - 5.75.
// Student's final assessment is 5.34.
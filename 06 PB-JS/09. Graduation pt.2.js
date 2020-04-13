function calcolateAverageGrade(params) {
    let name = params.shift();
    let currentClass = 1;
    let averageGrade = 0;
    let isRepeating = false;
    while (currentClass <= 12) {
        let grade = Number(params.shift());
        if (grade >= 4.00) {
            averageGrade += grade;
            currentClass++;
        } else {
            if (isRepeating) {
                break;
            }
            isRepeating = true;
        }
    }
    if (isRepeating) {
        console.log(`${name} has been excluded at ${currentClass} grade`);
    } else {
        averageGrade /= 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

calcolateAverageGrade(["Gosho", 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]); // Gosho graduated. Average grade: 5.53
calcolateAverageGrade(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3]); // Mimi has been excluded at 8 grade
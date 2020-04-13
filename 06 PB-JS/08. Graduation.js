function calcolateAverageGrade(params) {
    let name = params.shift();
    let currentClass = 1;
    let averageGrade = 0;
    while (currentClass <= 12) {
        let grade = Number(params.shift());
        if (grade >= 4.00) {
            averageGrade += grade;
            currentClass++;
        }
    }
    averageGrade /= 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

calcolateAverageGrade(['Pesho', '4', '5.5', '6', '5.43', '4.5', '6', '5.55', '5', '6', '6', '5.43', '5', '6']); // Pesho graduated. Average grade: 5.37
calcolateAverageGrade(["Ani", 5, 5.32, 6, 5.43, 5, 6, 5.5, 4.55, 5, 6, 5.56, 6]); // Ani graduated. Average grade: 5.45
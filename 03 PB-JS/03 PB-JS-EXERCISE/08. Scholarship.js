function calculationOfScholarship(incomeInBGN, averageScore, minimumWage){
    incomeInBGN = parseFloat(incomeInBGN);
    averageScore = parseFloat(averageScore);
    minimumWage = parseFloat(minimumWage);
    let socialScholarship = 0
    let scholarshipForExcellence = 0;
    if(incomeInBGN < minimumWage && averageScore > 4.5){
        socialScholarship = minimumWage * 0.35;
    }
    if(averageScore >= 5.5){
        scholarshipForExcellence = averageScore * 25;
    }
    if(socialScholarship > scholarshipForExcellence){
        console.log(`You get a Social scholarship ${Math.trunc(socialScholarship)} BGN`);
    }else if(scholarshipForExcellence >= socialScholarship && scholarshipForExcellence != 0){
        console.log(`You get a scholarship for excellent results ${Math.trunc(scholarshipForExcellence)} BGN`);
    }else{
        console.log("You cannot get a scholarship!")
    }
}

calculationOfScholarship(480.00, 4.60, 450.00); // You cannot get a scholarship!
calculationOfScholarship(300.00, 5.65, 420.00); // You get a Social scholarship 147 BGN
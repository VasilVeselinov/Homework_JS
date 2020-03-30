function checkForExcellentOrNotEvaluation(arg){
    let evaluation = parseFloat(arg);
    if(evaluation >= 5.50){
        console.log("Excellent!");
    }else{
        console.log("Not excellent.");
    }
}

checkForExcellentOrNotEvaluation(4.75); // Not excellent!
checkForExcellentOrNotEvaluation(5.49); // Not excellent!
checkForExcellentOrNotEvaluation(5.50); // Excellent!
checkForExcellentOrNotEvaluation(6.00); // Excellent!
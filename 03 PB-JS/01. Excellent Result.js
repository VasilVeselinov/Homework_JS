function checkForExcellentEvaluation(arg){
    let evaluation = parseFloat(arg);
    if(evaluation >= 5.5){
        console.log("Excellent!");
    }
}

checkForExcellentEvaluation(6); // Excellent!
checkForExcellentEvaluation(5); // (without output)
checkForExcellentEvaluation(5.5); // Excellent!
checkForExcellentEvaluation(5.49); // (without output)
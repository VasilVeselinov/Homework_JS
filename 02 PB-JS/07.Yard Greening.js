function greeningCalculate(squareMeters) {
    let result = squareMeters * 7.61;
    let discount = result * 0.18;
    result = result - discount;
    console.log(`The final price is: ${result.toFixed(2)} lv.`)
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}

greeningCalculate(540); // The final price is: 3369.71 lv. 
                        // The discount is: 739.69 lv.
greeningCalculate(135); // The final price is: 842.43 lv.
                        // The discount is: 184.92 lv.
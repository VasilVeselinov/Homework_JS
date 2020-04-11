function calculateSumFromNumberSwhichAreDividedOfDivider(start, end, divider) {
    start = parseInt(start);
    end = parseInt(end);
    divider = Number(divider);
    let sumOfNumbers = 0;
    for (let index = start; index <= end; index++) {
        if (index % divider == 0) {
            sumOfNumbers += index;
        }
    }
    console.log(sumOfNumbers);
}

calculateSumFromNumberSwhichAreDividedOfDivider(10, 30, 7); // 63
calculateSumFromNumberSwhichAreDividedOfDivider(61, 125, 25); // 300
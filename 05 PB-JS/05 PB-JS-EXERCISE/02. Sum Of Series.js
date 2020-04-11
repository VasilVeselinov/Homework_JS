function sumOfSeries(numberN) {
    numberN = parseInt(numberN);
    let result = 0;
    for (let index = 1; index <= numberN; index++) {
        result += index * index;
    }
    console.log(result);
}

sumOfSeries(7); // 140
sumOfSeries(4); // 30
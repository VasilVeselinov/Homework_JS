function printsIsEqual(numbers) {
    let numberN = Number(numbers[0]) * 2;
    let leftSum = 0;
    let rightSum = 0;
    for (let index = 1; index <= numberN; index++) {
        if (index <= numberN / 2) {
            leftSum += Number(numbers[index]);
        } else {
            rightSum += Number(numbers[index]);
        }
    }
    let difference = Math.abs(leftSum - rightSum);
    if (difference == 0) {
        console.log("Yes, sum = " + leftSum);
    } else {
        console.log("No, diff = " + difference);
    }
}

printsIsEqual([2, 10, 90, 60, 40]); // Yes, sum = 100
printsIsEqual([2, 90, 9, 50, 50]); // No, diff = 1
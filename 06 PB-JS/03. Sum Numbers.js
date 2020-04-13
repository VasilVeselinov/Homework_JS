function calculateTheSumFromNumbers(numbers) {
    let i = 0;
    let number = numbers[i];
    let result = 0;
    while (number != "Stop") {
        number = Number(number);
        result += number;
        i++;
        number = numbers[i];
    }
    console.log(result);
}

calculateTheSumFromNumbers([10, 20, 30, 45, "Stop"]); // 105
calculateTheSumFromNumbers([1, 2, 3, 4, 5, 6, "Stop"]); // 21
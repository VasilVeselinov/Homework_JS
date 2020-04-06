function calculator(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result;
    let evenOrOdd;
    if (operator == '+' || operator == '-' || operator == '*') {
        if (operator == '+') {
            result = n1 + n2;
        } else if (operator == '-') {
            result = n1 - n2;
        } else {
            result = n1 * n2;
        }
        if (result % 2 == 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    } else {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            if (operator == '/') {
                result = (n1 / n2).toFixed(2);
            } else {
                result = n1 % n2;
            }
            console.log(`${n1} ${operator} ${n2} = ${result}`);
        }
    }
}

calculator(10, 12, "+"); // 10 + 12 = 22 - even
calculator(10, 1, "-"); // 10 – 1 = 9 - odd
calculator(7, 3, "*"); // 7 * 3 = 21 - odd
calculator(123, 12, "/"); // 123 / 12 = 10.25
calculator(100, 12, "/"); // 100 / 12 = 8.33
calculator(10, 3, "%"); // 10 % 3 = 1
calculator(112, 0, "/"); // Cannot divide 112 by zero
calculator(10, 0, "%"); // Cannot divide 10 by zero
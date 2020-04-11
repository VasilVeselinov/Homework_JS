function printing(n) {
    n = Number(n);
    let start = 1;
    if (n % 2 == 0) {
        start += 1;
    }
    for (let index = start; index <= n; index += 2) {
        console.log(`Current number: ${index}. Cube: ${Math.pow(index, 3)}`);
    }
}

printing(5);
// Current number: 1. Cube: 1
// Current number: 3. Cube: 27
// Current number: 5. Cube: 125
console.log();
printing(6);
// Current number: 2. Cube: 8
// Current number: 4. Cube: 64
// Current number: 6. Cube: 216
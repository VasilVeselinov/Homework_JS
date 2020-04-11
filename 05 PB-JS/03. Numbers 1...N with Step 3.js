function printNumberFrom1toNWithAStep(n) {
    n = Number(n);
    for (let index = 1; index <= n; index += 3) {
        console.log(index);
    }
}

printNumberFrom1toNWithAStep(10);
// 1
// 4
// 7
// 10
printNumberFrom1toNWithAStep(7);
// 1
// 4
// 7
printNumberFrom1toNWithAStep(15);
// 1
// 4
// 7
// 10
// 13
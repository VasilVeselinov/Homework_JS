function printingFromStartToEndAndSpecialNumber(start, end, n) {
    start = parseInt(start);
    end = parseInt(end);
    n = parseInt(n);
    for (let index = start; index <= end; index++) {
        if (index % n == 0) {
            if (index % (n * n) == 0) {
                console.log(`Very special number: ${index}`);
            } else {
                console.log(`Special number: ${index}`); 
            }
        } else {
            console.log(index);
        }
    }
}

printingFromStartToEndAndSpecialNumber(1, 25, 3);
// 1
// 2
// Special number: 3
// 4
// 5
// Special number: 6
// 7
// 8
// Very special number: 9
// 10
// …
// Special number: 21
// 22
// 23
// Special number: 24
// 25
console.log();
printingFromStartToEndAndSpecialNumber(1, 10, 4);
// 1
// 2
// 3
// Special number: 4
// 5
// 6
// 7
// Special number: 8
// 9
// 10
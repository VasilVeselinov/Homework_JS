function printingTheNumbersFrom1To1000EndingOn7() {
    for (let index = 0; index < 1000; index++) {
        if (index % 10 == 7) {
            console.log(index);
        }
    }
}

printingTheNumbersFrom1To1000EndingOn7();
// 7
// 17
// 27
// 37
// 47
// 57
// 67
// 77
// 87
// 97
// 107
// ...
// 967
// 977
// 987
// 997
function printHoursADay() {
    for (let hour = 0; hour <= 23; hour++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            console.log(`${hour}:${minutes}`);
        }
    }
}

printHoursADay();
// 0:0
// 0:1
// 0:2
// 0:3
// 0:4
// 0:5
// 0:6
// 0:7
// ...
// 0:57
// 0:58
// 0:59
// 1:0
// 1:1
// ...
// 23:51
// 23:52
// 23:53
// 23:54
// 23:55
// 23:56
// 23:57
// 23:58
// 23:59
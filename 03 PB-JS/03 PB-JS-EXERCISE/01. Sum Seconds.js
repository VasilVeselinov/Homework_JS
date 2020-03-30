function sumOfSeconds(firstTime, secondTime, thirdTime){
    firstTime = Number(firstTime);
    secondTime = Number(secondTime);
    thirdTime = Number(thirdTime);
    let totalSeconds= firstTime + secondTime + thirdTime;
    let minutes = parseInt(totalSeconds / 60);
    let remainder = totalSeconds % 60;
    if(remainder < 10){
        console.log(minutes + ":0" + remainder);
    }else{
        console.log(minutes + ":" + remainder);
    }
}

sumOfSeconds(35, 45, 44); // 2:04
sumOfSeconds(22, 7, 34); // 1:03
sumOfSeconds(50, 50, 49); // 2:29
sumOfSeconds(14, 12, 10); // 0:36
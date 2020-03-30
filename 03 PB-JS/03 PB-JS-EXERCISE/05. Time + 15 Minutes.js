function timeAfter15Minutes(hour, minutes){
    hour = parseInt(hour);
    minutes = parseInt(minutes);
    minutes += 15;
    if(minutes >= 60){
        hour += 1;
        minutes -= 60;
    }
    if(hour > 23){
        hour = 0;
    }
    if(minutes < 10){
        console.log(`${hour}:0${minutes}`)
    }else{
        console.log(`${hour}:${minutes}`)
    }
}

timeAfter15Minutes(1, 46); // 2:01
timeAfter15Minutes(0, 01); // 0:16
timeAfter15Minutes(23, 59); // 0:14
timeAfter15Minutes(11, 08); // 11:23
timeAfter15Minutes(12, 49); // 13:04
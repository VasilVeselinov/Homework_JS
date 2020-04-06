function calculatesWhetherAStudentIsLateForAnExam(hourOfExam, minutesOfExam, hourOfArrival, minutesOfArrival) {
    hourOfExam = Number(hourOfExam);
    minutesOfExam = Number(minutesOfExam);
    hourOfArrival = Number(hourOfArrival);
    minutesOfArrival = Number(minutesOfArrival);
    let totalMinutesExam = hourOfExam * 60 + minutesOfExam;
    let totalMinutes = hourOfArrival * 60 + minutesOfArrival;
    if (totalMinutesExam < totalMinutes) {
        console.log("Late");
        if (totalMinutesExam > totalMinutes - 60) {
            console.log(totalMinutes - totalMinutesExam + " minutes after the start");
        } else {
            let restOfMinutes = totalMinutes - totalMinutesExam;
            let hour = parseInt(restOfMinutes / 60);
            let minutes = restOfMinutes % 60;
            if (minutes >= 10) {
                console.log(hour + ":" + minutes + " hours after the start");
            } else {
                console.log(hour + ":0" + minutes + " hours after the start");
            }
        }
    } else if (totalMinutesExam >= totalMinutes && totalMinutesExam <= totalMinutes + 30) {
        console.log("On time");
        if (totalMinutesExam - totalMinutes > 0) {
            console.log(totalMinutesExam - totalMinutes + " minutes before the start");
        }
    } else {
        console.log("Early");
        if (totalMinutesExam - totalMinutes < 60) {
            console.log(totalMinutesExam - totalMinutes + " minutes before the start");
        } else {
            let restOfMinutes = totalMinutesExam - totalMinutes;
            let hour = parseInt(restOfMinutes / 60);
            let minutes = restOfMinutes % 60;
            if (minutes >= 10) {
                console.log(hour + ":" + minutes + " hours before the start");
            } else {
                console.log(hour + ":0" + minutes + " hours before the start");
            }
        }
    }
}

calculatesWhetherAStudentIsLateForAnExam(9, 30, 9, 50); // Late
                                                        // 20 minutes after the start
calculatesWhetherAStudentIsLateForAnExam(9, 00, 8, 30); // On time
                                                        // 30 minutes before the start
calculatesWhetherAStudentIsLateForAnExam(16, 00, 15, 00); // Early
                                                          // 1:00 hours before the start
calculatesWhetherAStudentIsLateForAnExam(9, 00, 10, 30); // Late
                                                         // 1:30 hours after the start
calculatesWhetherAStudentIsLateForAnExam(14, 00, 13, 55); // On time
                                                          // 5 minutes before the start
calculatesWhetherAStudentIsLateForAnExam(11, 30, 8, 12); // Early
                                                         // 3:18 hours before the start
calculatesWhetherAStudentIsLateForAnExam(10, 00, 10, 00); // On time
calculatesWhetherAStudentIsLateForAnExam(11, 30, 10, 55); // Early
                                                          // 35 minutes before the start
calculatesWhetherAStudentIsLateForAnExam(11, 30, 12, 29); // Late
                                                          // 59 minutes after the start
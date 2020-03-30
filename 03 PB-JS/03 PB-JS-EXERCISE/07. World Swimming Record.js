function calculationWhetherIvanWillMakeNewRecord(theRecordInSeconds, distanceInMeters, timeInSecondsForOneMeter){
    theRecordInSeconds = parseFloat(theRecordInSeconds);
    distanceInMeters = parseFloat(distanceInMeters);
    timeInSecondsForOneMeter = parseFloat(timeInSecondsForOneMeter);
    let timesOfDelay = Math.trunc(distanceInMeters / 15);
    let delayInSeconds = timesOfDelay * 12.5;
    let totalSecondsOfIvan = distanceInMeters * timeInSecondsForOneMeter + delayInSeconds;
    if(totalSecondsOfIvan < theRecordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalSecondsOfIvan.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalSecondsOfIvan - theRecordInSeconds).toFixed(2)} seconds slower.`);
    }
}

calculationWhetherIvanWillMakeNewRecord(10464, 1500, 20); // No, he failed! He was 20786.00 seconds slower.
calculationWhetherIvanWillMakeNewRecord(55555.67, 3017, 5.03); // Yes, he succeeded! The new world record is 17688.01 seconds.
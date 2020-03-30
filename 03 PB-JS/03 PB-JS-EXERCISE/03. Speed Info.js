function infoForInputSpeed(inputSpeed){
    inputSpeed = Number(inputSpeed);
    if(inputSpeed <= 10){
        console.log("slow");
    }else if(inputSpeed <= 50){
        console.log("average");
    }else if(inputSpeed <= 150){
        console.log("fast");
    }else if(inputSpeed <= 1000){
        console.log("ultra fast");
    }else{
        console.log("extremely fast");
    }
}

infoForInputSpeed(8); // slow
infoForInputSpeed(49.5); // average
infoForInputSpeed(126); // fast
infoForInputSpeed(160); // ultra fast
infoForInputSpeed(3500); // extremely fast
function litersOfWaterCalculate(length, width, height, percentOccupiedArea) {
    let capacityOfTank = length * width * height;
    let realCapacity = capacityOfTank - capacityOfTank * (percentOccupiedArea / 100);
    let realcapacityToLiters = realCapacity * 0.001;
    console.log((realcapacityToLiters).toFixed(3));
}

litersOfWaterCalculate(85, 75, 47, 17); // 248.689
litersOfWaterCalculate(105, 77, 89, 18.5); // 586.445
function calculateNumberOfDancers(lengthOfHall, widthOfHall, sideOfWardrobe) {
    lengthOfHall = Number(lengthOfHall);
    widthOfHall = Number(widthOfHall);
    sideOfWardrobe = Number(sideOfWardrobe);
    let areaHall = (lengthOfHall * 100) * (widthOfHall * 100);
    let sizeOfWardrobe = (sideOfWardrobe * 100) * (sideOfWardrobe * 100);
    let sizeOfBench = areaHall / 10;
    let sizeOfFreeSpace = areaHall - sizeOfWardrobe - sizeOfBench;
    let sizeOfNumberDancer = Math.floor (sizeOfFreeSpace / (40 + 7000));
    console.log(`${sizeOfNumberDancer}`);
}

calculateNumberOfDancers(50, 25, 2); // 1592
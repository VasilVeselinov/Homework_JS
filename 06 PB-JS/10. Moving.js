function calculatesTheVacantVolumeOfTheDwelling(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let volumeOfTheDwelling = width * length * height;
    while (volumeOfTheDwelling > 0) {
        let text = input.shift();
        if (text == "Done") {
            break;
        }
        let numberBox = Number(text);
        volumeOfTheDwelling -= numberBox;
    }
    if (volumeOfTheDwelling >= 0) {
        console.log(volumeOfTheDwelling + " Cubic meters left.");
    } else {
        console.log(`No more free space! You need ${Math.abs(volumeOfTheDwelling)} Cubic meters more.`);
    }
}

calculatesTheVacantVolumeOfTheDwelling([10, 10, 2, 20, 20, 20, 20, 122]); // No more free space! You need 2 Cubic meters more.
calculatesTheVacantVolumeOfTheDwelling([10, 1, 2, 4, 6, "Done"]); // 10 Cubic meters left.
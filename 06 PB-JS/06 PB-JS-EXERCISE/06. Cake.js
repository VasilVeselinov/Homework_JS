function calculateHowManyPiecesCanGuestsTake(input) {
    let width = parseInt(input.shift());
    let length = parseInt(input.shift());
    let numberOfCakePieces = width * length;
    while (numberOfCakePieces > 0) {
       text = input.shift();
        if (text=="STOP") {
            break;
        }
        let piece = parseInt(text);
        numberOfCakePieces -= piece;
    }
    if (numberOfCakePieces >= 0) {
        console.log(numberOfCakePieces + " pieces are left.");
    } else {
        console.log(`No more cake left! You need ${Math.abs(numberOfCakePieces)} pieces more.`);
    }
}

calculateHowManyPiecesCanGuestsTake([10, 10, 20, 20, 20, 20, 21]); // No more cake left! You need 1 pieces more.
calculateHowManyPiecesCanGuestsTake([10, 2, 2, 4, 6, "STOP"]); // 8 pieces are left.
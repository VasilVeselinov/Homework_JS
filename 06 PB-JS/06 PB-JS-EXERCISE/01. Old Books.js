function findBookInLibrary(input) {
    let searchBook = input.shift();
    let libraryCapacity = Number(input.shift());
    let numberOfSearching = 0;
    let isFound = false;
    for (let index = 0; index < libraryCapacity; index++) {
        let currentBook = input[index];
        if (searchBook == currentBook) {
            isFound = true;
            break;
        }
        numberOfSearching++;
    }
    if (isFound) {
        console.log(`You checked ${numberOfSearching} books and found it.`);
    } else {
        console.log(`The book you search is not here!\nYou checked ${numberOfSearching} books.`);
    }
}

findBookInLibrary(["Troy", 8, "Stronger", "Life Style", "Troy"]);
// You checked 2 books and found it.
console.log();
findBookInLibrary(["The Spot", 4, "Hunger Games", "Harry Potter", "Torronto", "Spotify"]);
// The book you search is not here!
// You checked 4 books.
console.log();
findBookInLibrary(["Bourne", 32, "True Story", "Forever", "More Space", "The Girl",
    "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"
]);
// You checked 10 books and found it.
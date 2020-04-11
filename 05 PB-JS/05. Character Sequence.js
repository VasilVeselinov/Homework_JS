function printingTextByLetter(text) {
    text = String(text);
    for (let index = 0; index < text.length; index++) {
        console.log(text.charAt(index));
    }
}

printingTextByLetter("softuni");
// s
// o
// f
// t
// u
// n
// i
console.log();
printingTextByLetter("ice cream");
// i
// c
// e
//  
// c
// r
// e
// a
// m
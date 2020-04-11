function calculateSumOfTheVowelLetters(text) {
    text = String(text);
    let sum = 0;
    for (let index = 0; index < text.length; index++) {
        switch (text.charAt(index)) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }
    console.log(sum);
}

calculateSumOfTheVowelLetters("hello"); // 6
calculateSumOfTheVowelLetters("hi"); // 3
calculateSumOfTheVowelLetters("bamboo"); // 9
calculateSumOfTheVowelLetters("beer"); // 4
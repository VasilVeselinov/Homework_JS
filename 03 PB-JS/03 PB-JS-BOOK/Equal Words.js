function equalWords([word1, word2]){
    word1 = String(word1).toLowerCase();
    word2 = String(word2).toLowerCase();
    if(word1 == word2){
        console.log("yes");
    }else{
        console.log("no");
    }
}

equalWords(["Hello", "Hello"]); // yes
equalWords(["SoftUni", "softuni"]); // yes
equalWords(["Soft", "Uni"]); // no
equalWords(["beer", "vodka"]); // no
equalWords(["HeLlO", "hELLo"]); // yes
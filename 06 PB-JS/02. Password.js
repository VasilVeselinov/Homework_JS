function readInputOfUser(input) {
    let userName = input[0];
    let password = input[1];
    let i = 2;
    let text = input[i];
    while (text != password) {
        i++;
        text = input[i];
    }
    console.log(`Welcome ${userName}!`);
}

readInputOfUser(["Nakov", 1234, "pass", 1324, 1234]); // Welcome Nakov!
readInputOfUser(["Gosho", "secret", "secret"]); // Welcome Gosho!
function readText(words) {
    let text = words.shift();
    while (text != "Stop") {
        text = words.shift();
    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop"]);
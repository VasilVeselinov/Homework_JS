function printTypeOfAnimalByName(name) {
    name = String(name);
    switch (name) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

printTypeOfAnimalByName("dog"); // mammal
printTypeOfAnimalByName("crocodile"); // reptile
printTypeOfAnimalByName("dolphin"); // unknown
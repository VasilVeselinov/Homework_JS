function squareOfStars(n){
    let a = "";
    for(i = 0; i < n; i = i + 1){
        a = a + "*";
    }
    console.log(a);

    for(i = 0; i < n - 2; i = i + 1){
        a = "*";
        for(j = 0; j < n - 2; j = j + 1){
            a = a + " ";
        }
        a = a + "*";
        console.log(a);
    }
    a = "";
    for(i = 0; i < n; i = i + 1){
        a = a + "*";
    }
    console.log(a);
}

squareOfStars(6);
function triangleOfStars(){
    for(i = 0; i < 10; i = i + 1){
        let a = "*";
        for(j = 0; j < i; j = j + 1){
            a = a + "*";
        }
        console.log(a)
    }
}

triangleOfStars();
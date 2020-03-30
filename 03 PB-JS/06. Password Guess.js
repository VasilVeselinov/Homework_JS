function checkPassword(text){
    if(text === "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}

checkPassword("qwerty"); // Wrong password!
checkPassword("s3cr3t!P@ssw0rd"); // Welcome
checkPassword("s3cr3t!p@ss"); // Wrong password!
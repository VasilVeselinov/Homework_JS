function calculateTheDayAfter1000Days(date) {
    let text = String(date);
    let textArray = text.split("-");
    let day = textArray[0];
    let month = textArray[1];
    let year = textArray[2];
    text = year + "-" + month + "-" + day;
    date = new Date(text);
    let newDate = new Date(date.setDate(date.getDate() + 1000));
    day = newDate.getDate();
    month = newDate.getMonth() + 1;
    year = newDate.getFullYear();
    if(day < 10){
        day = "0" + day;
    }
    if(month < 10){
        month = "0" + month;
    }
    console.log(day + "-" + month + "-" + year);
}

calculateTheDayAfter1000Days("25-02-1995"); // 21-11-1997
calculateTheDayAfter1000Days("07-11-2003"); // 03-08-2006
calculateTheDayAfter1000Days("30-12-2002"); // 25-09-2005
calculateTheDayAfter1000Days("01-01-2012"); // 27-09-2014
calculateTheDayAfter1000Days("14-06-1980"); // 11-03-1983
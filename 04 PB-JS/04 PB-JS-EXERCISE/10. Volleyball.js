function howManyTimesDidVladyPlayVolleyballDuringTheYear(leapYearOrNot, p, h) {
    p = parseInt(p);
    h = parseInt(h);
    let gameSaturday = (48 - h) * 3 / 4;
    let gameHolidays = p * 2 / 3;
    let totalGame = gameSaturday + h + gameHolidays;
    if (leapYearOrNot == "leap") {
        totalGame = totalGame * 1.15;
    }
    console.log(Math.floor(totalGame));
}

howManyTimesDidVladyPlayVolleyballDuringTheYear("leap", 5, 2); // 45
howManyTimesDidVladyPlayVolleyballDuringTheYear("normal", 3, 2); // 38
howManyTimesDidVladyPlayVolleyballDuringTheYear("leap", 2, 3); // 43
howManyTimesDidVladyPlayVolleyballDuringTheYear("normal", 11, 6); // 44
howManyTimesDidVladyPlayVolleyballDuringTheYear("leap", 0, 1); // 41
howManyTimesDidVladyPlayVolleyballDuringTheYear("normal", 6, 13); // 43
function pointInFigure([h, x, y]) {
    h = Number(h);
    x = Number(x);
    y = Number(y);
    let outFigure1 = (x < 0 || x > 3 * h) || (y < 0 || y > h);
    let outFigure2 = (x < h || x > 2 * h) || (y < h || y > 4 * h);
    let inFigure1 = x > 0 && x < 3 * h && y > 0 && y < h;
    let inFigure2 = x > h && x < 2 * h && y > h && y < 4 * h;
    let commonBorder = x > h && x < 2 * h && y == h;
    if (outFigure1 && outFigure2) {
        console.log("outside");
    } else if(inFigure1 || inFigure2 || commonBorder){
        console.log("inside");
    }else{
        console.log("border");
    }
}

pointInFigure([2, 2, 2]) // border
pointInFigure([2, 6, 0]) // border
pointInFigure([15, 30, 0]) // border
pointInFigure([15, 13, 55]) // outside
pointInFigure([15, 37, 18]) // outside
pointInFigure([2, 0, 6]) // outside
pointInFigure([15, -4, 7]) // outside
pointInFigure([15, 29, 37]) // inside
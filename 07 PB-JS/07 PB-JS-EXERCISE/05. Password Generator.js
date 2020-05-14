function generatesPasswords(n, l) {
    n = parseInt(n);
    l = parseInt(l);
    let printLine = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 0; k < l; k++) {
                for (let m = 0; m < l; m++) {
                    for (let o = 1; o <= n; o++) {
                        if (o > i && o > j) {
                            printLine += "" + i + j + String.fromCharCode(k + 97) + String.fromCharCode(m + 97) + o + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(printLine);
}

generatesPasswords(2, 4); // 11aa2 11ab2 11ac2 11ad2 11ba2 11bb2 11bc2 11bd2 11ca2 11cb2 11cc2 11cd2 11da2 11db2 11dc2 11dd2
function calculateInLevaAndUSD(numberOfRectangularTables, lengthOfTable, widthOfTable) {
    numberOfRectangularTables = Number(numberOfRectangularTables);
    lengthOfTable = Number(lengthOfTable);
    widthOfTable = Number(widthOfTable);
    let areaA = numberOfRectangularTables * (lengthOfTable + 2 *0.30) * (widthOfTable + 2 * 0.30);
    let areaB = numberOfRectangularTables * (lengthOfTable / 2) * (lengthOfTable / 2);
    let priceUSD = areaA * 7 + areaB * 9;
    console.log(`${priceUSD.toFixed(2)} USD`);
    let priceBGN = priceUSD * 1.85;
    console.log(`${priceBGN.toFixed(2)} BGN`);
}

calculateInLevaAndUSD(5, 1.00, 0.50); // 72.85 USD
                                      // 134.77 BGN
calculateInLevaAndUSD(10, 1.20, 0.65); // 189.90 USD
                                       // 351.32 BGN
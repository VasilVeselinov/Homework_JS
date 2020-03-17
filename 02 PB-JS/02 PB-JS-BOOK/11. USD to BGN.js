function converFromUSDToBGN(amountUSD) {
    amountUSD = parseFloat(amountUSD);
    let result = amountUSD * 1.79549;
    console.log(`${result.toFixed(2)} BGN`);
}

converFromUSDToBGN(20); // 35.91 BGN
converFromUSDToBGN(100); // 179.55 BGN
converFromUSDToBGN(12.5); // 22.44 BGN
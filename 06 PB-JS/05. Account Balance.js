function calculateAccountBalance(input) {
    let accountBalance = 0;
    let numberOfDeposits = Number(input[0]);
    for (let index = 1; index <= numberOfDeposits; index++) {
        let deposit = Number(input[index]);
        if (deposit > 0) {
            accountBalance += deposit;
        } else {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${deposit.toFixed(2)}`);
    }
    console.log(`Total: ${accountBalance.toFixed(2)}`);
}

calculateAccountBalance([3, 5.51, 69.42, 100]);
// Increase: 5.51
// Increase: 69.42
// Increase: 100.00
// Total: 174.93
console.log();
calculateAccountBalance([5, 120, 45.55, -150]);
// Increase: 120.00
// Increase: 45.55
// Invalid operation!
// Total: 165.55
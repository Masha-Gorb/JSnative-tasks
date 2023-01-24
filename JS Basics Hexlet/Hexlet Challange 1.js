//Сумма квадратов первых десяти натуральных чисел это 1**2 + 2**2 + 3**2 + ... + 10**2 = 385.
// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

function sumSquareDifference(n) {
    const arrOfAllNumbers = [];
    for (let count = 0; count <= n; count += 1) {
        arrOfAllNumbers.push(count);
    }
    const a = arrOfAllNumbers.reduce((sum, current) => sum + current, 0) ** 2;
    const b = arrOfAllNumbers.map((m) => m * m).reduce((sum, current) => sum + current);
    return a - b;
}

console.log(sumSquareDifference(10));
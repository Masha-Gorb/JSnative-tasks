function Y(humanYears) {
    // Your code here!
    let catYears = 0;
    let dogYears = 0;
    let i = 0;
    do {
        let catYears = 4;
        i++;
    } while (i < humanYears);

    return [humanYears, catYears, dogYears];
}

console.log(Y(10))


//15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
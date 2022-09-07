function bonusTime(salary, bonus) {
// your code here
    return bonus ? "\u00A3"+salary*10 : `£${salary}`
}

console.log(bonusTime(10000, true))
console.log("\u00A3")

function arithmetic(a, b, operator){
    //your code here!
    switch (operator) {
        case 'add':
            return a+b
        case 'subtract' :
            return a-b
        case 'multiply':
            return a*b
        case 'divide' :
            return a/b
    }
}

console.log(arithmetic(1, 2, "add"))
console.log(arithmetic(8, 2, "subtract"))
console.log(arithmetic(5, 2, "multiply"))
console.log(arithmetic(8, 2, "divide"))
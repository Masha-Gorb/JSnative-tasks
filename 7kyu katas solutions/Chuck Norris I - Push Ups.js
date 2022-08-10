let binary = "110010101100"
console.log(parseInt(binary, 2))

let phrase = '1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110'
let result1 = phrase.split(' ')
let result2 = result1.filter(function(val) {
    return (val === "0" || val === '1');
});
let result3 = result2.join('')
console.log(result1)

function foo(string){
    if (string === '' && string === [] && string === 1) {
        return 'FAIL!!'
    } else {
        let result1 = string.split('').filter(function(val) {
            return (val === "0" || val === '1');
        }).join('');
        return parseInt(result1, 2)
    }
}

console.log(foo(phrase))
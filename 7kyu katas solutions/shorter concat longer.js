function shorter_reverse_longer(a,b){
    if(a.length > b.length || a.length === b.length) {
        let strLonger = a.split('').reverse().join('')
        let strShorter = b.split(' ')
        return strShorter+strLonger+strShorter
    } else if(a.length < b.length){
        let strLonger = b.split('').reverse().join('')
        let strShorter = a.split(' ')
        return strShorter+strLonger+strShorter
    }
}

console.log(shorter_reverse_longer("first", "abcde"))

function shorter_reverse_longerBetterSolution(a,b){
    return a.length >= b.length ? b + a.split('').reverse().join('') + b :
        a + b.split('').reverse().join('') + a;
}
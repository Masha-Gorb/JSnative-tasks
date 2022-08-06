//7куи ката: из длинного числа надо вернуть длинное число где все числа в квадрате
// //размышления :)))
// let num = 3212
// let strNum = num.toString()
// let arr11 = strNum.split('').map(m => +m * +m).join(' ').replace(/\s/g, '')
// let result = parseInt(arr11)
// console.log(arr11.replace(/\s/g, ''))
// console.log(result)
// //решение :
function squareDigits(num){
    let result = num.toString().split('').map(m => +m * +m).join(' ').replace(/\s/g, '')
    return parseInt(result)
}
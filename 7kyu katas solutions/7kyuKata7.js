//7куи ката: дан массив и число, надо вернуть массив из прошлого массива тока четные столько же сколько число
let arrForThisKata = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//[2, 4, 6, 8] => [4, 6, 8] - должно так стать
let numForThisKata = 3

function evenNumbers(array, number) {
    let newArr = array.filter(f => f%2 === 0).reverse()
    newArr.length = number
    return newArr.reverse()
}
console.log(evenNumbers(arrForThisKata, numForThisKata))
//решение выше подходит
//решение ниже как пример более элегантного решения
const evenNumbers2 = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

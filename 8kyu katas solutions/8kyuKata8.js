//ката 8куи. дана строка, надо вернуть строку где каждая буква удвоена
let str = 'Hello world'
let arr11 = str.replace(/./g, m => Array(3).join(m))

console.log(arr11)
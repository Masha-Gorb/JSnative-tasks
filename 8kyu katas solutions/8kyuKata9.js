//ката 8 куи. дана строка, надо вернуть строку с поменяными местами словами
//решение мое
function nameSuffle(str){
    var arr = str.split(" ");
    return arr[1] + ' ' + arr[0]
}
// //бест практис
function nameSuffle2(str){
  return str.split(' ').reverse().join(' ')
}
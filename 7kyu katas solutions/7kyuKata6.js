//7kyu kata
//сделать каждую вторую букву в строке заглавной
let testString = "stop making spongebob memes!"
function spongeMeme(sentence) {
    let arr = sentence.split('')
    return arr.map((v,i)=>i%2!==0?v.toLowerCase():v.toUpperCase()).join('')
}
// //блядь!!!! в map можно оказ и индекс передавать сукааа
//
console.log(spongeMeme(testString))
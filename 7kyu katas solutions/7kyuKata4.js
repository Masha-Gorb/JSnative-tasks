// 7kyu kata убрать из строки все гласные
let str = "This website is for losers LOL!"
let arr444 = str.split('').filter(f => f !== 'e')
    .filter(f=> f !== 'o').
    filter(f => f !== 'i').
    filter(f=> f !== 'u').
        filter(f => f !== 'O').join('')
console.log(arr444)
//самое лоховское решение евар
function disemvowel(str) {
    return str.split('').filter(f => f !== 'e')
        .filter(f=> f !== 'o').
        filter(f => f !== 'i').
        filter(f => f !== 'a').
        filter(f=> f !== 'u').
        filter(f => f !== 'E')
        .filter(f=> f !== 'O').
        filter(f => f !== 'I').
        filter(f=> f !== 'U').
        filter(f => f !== 'A')
        .join('')
}
// норм решение с фильтром (не оч мне понятное)
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) === -1;
  }).join('');
}
//норм решение с инклюдом
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}
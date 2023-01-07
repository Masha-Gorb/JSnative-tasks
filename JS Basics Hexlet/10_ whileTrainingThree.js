
const foo = (str, n) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        if(n%2 === 0) {
            if(i%n === 1) {
                result = `${result}${str[i].toUpperCase()}`
            } else {
                result = `${result}${str[i]}`
            }
        } else {
            if(i%n === 2) {
                result = `${result}${str[i].toUpperCase()}`
            } else {
                result = `${result}${str[i]}`
            }
        }
        i++
    }
    return result
}

console.log(foo('hello', 2))
console.log(foo('I never look back', 3))

//const fooCorrect = (str, n) => {
//   let i = 0;
//   let result = '';
//   while (i < str.length) {
//     const current = str[i];
//     if ((i + 1) % n === 0) {
//       result = `${result}${current.toUpperCase()}`;
//     } else {
//       result = `${result}${current}`;
//     }
//     i++;
//   }
//
//   return result;
// };
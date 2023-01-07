const foo = (str) => {
    let result = ''
    let halfRes = ''
    if(str.length%2 !== 0) {
        for(let i = 1; i < str.length; i+= 1) {
            if(i%2!==0) {
                halfRes = `${str[i]}${str[i-1]}`
                result = `${result}${halfRes}`
            }
        }
        result = `${result}${str[str.length-1]}`
    } else {
        for(let i = 1; i < str.length; i+= 1) {
            if(i%2!==0) {
                halfRes = `${str[i]}${str[i-1]}`
                result = `${result}${halfRes}`
            }
        }
    }
    return result
};

console.log(foo('go!'));
//чуть не упала духом, пока решала

//const encrypt = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length; i += 2) {
//     const nextSymbol = str[i + 1] || '';
//     result = `${result}${nextSymbol}${str[i]}`;
//   }
//
//   return result;
// };
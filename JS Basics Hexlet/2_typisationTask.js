
//мое корявое решение
function reduce(number) {
    let arr = number.toString().split('');
    return arr.reduce(function(acc, val) {
        return Number(acc) + Number(val)
    });
}


const foo = (num) => {
    let a = reduce(num);
    if(a >= 10) {
        let b = reduce(a);
        if (b >= 10) {
            return reduce(a);
        } else {
            return b;
        }
    } else {
        return a
    }
}

//const sumDigits = (num) => {
//   const str = String(num);
//   let result = 0;
//   for (let i = 0; i < length(str); i += 1) {
//     result += Number(str[i]);
//   }
//
//   return result;
// };
//
// const addDigits = (num) => {
//   let result = num;
//   while (result >= 10) {
//     result = sumDigits(result);
//   }
//
//   return result;
// };
//
// export default addDigits;

console.log(foo(23456))

const foo = (str, char) => {
    let uppStr = str.toUpperCase();
    let count = 0;
    let i = 0;
    while (i < uppStr.length) {
        if(uppStr[i] === char.toUpperCase()) {
            count++
        }
        i++
    }
    return count
};

console.log(foo('axe', 'a'));
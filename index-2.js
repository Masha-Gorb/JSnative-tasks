console.log('new task')

let myArr = [2];
console.log(myArr.sort((a, b) => a - b))

function findNumber(array) {
    let sortedArr = array.sort((a, b) => a - b)
    if(sortedArr.length === 1 && sortedArr[0] === 1) {
        return 2
    } else {
        const result = [];
        for(let i = 1; i <= Math.max.apply(null, sortedArr); i++){
            if( !sortedArr.includes(i) ){
                result.push(i);
            }
        }
        return result[0];
    }
}

console.log(findNumber(myArr))







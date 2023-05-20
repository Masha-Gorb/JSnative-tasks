let myArr = [2, 3, 1, 4];
console.log(myArr.sort((a, b) => a - b))

function findNumber(array) {
    let sortedArr = array.sort((a, b) => a - b);
    let result;
    if(sortedArr.length === 1 && sortedArr[0] === 1) {
        return 2
    } else if (sortedArr.length === 0) {
        return 1
    } else {
        for (let i = 1; i <= sortedArr.length; i++) {
            if(!sortedArr.includes(i)) {
                result = i
                return result;
            }
        }
    }

    if(result === undefined) {
        return sortedArr[sortedArr.length - 1] + 1
    }
}

console.log(findNumber(myArr))
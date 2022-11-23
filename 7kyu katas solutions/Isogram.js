//проверить повторяются ли буквы в слове

function isIsogram(str) {
    let arr = str.toUpperCase().split('');
    let filtredArr = arr.filter(function(item, pos) {
        return arr.indexOf(item) === pos;
    })
    return filtredArr.length >= arr.length
}

console.log(isIsogram("moOse"))
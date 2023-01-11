console.log('new task')

console.log('попытка два')
//ОГРАНИЧЕНИЯ, КОТОРЫЕ ПОМОГУТ

const findCombinationsVerTwo = (arr, number) => {
    const sortedArr = arr.sort((a, b) => a - b);
    const sumOfElements = sortedArr.reduce(function(acc, val) {
        return acc + val
    });

    if(sumOfElements < number) {
        return []
    } else {
        let index = sortedArr.indexOf(number+1)
        sortedArr.splice(index);
        return sortedArr
    }

}
console.log(findCombinationsVerTwo([7, 8, 3, 4, 5, 6, 1, 2], 99))


// const limit = 35; //верхняя граница списка

// function doPartition () {
//     var partitionResultString = '',
//         count = 0;
//     function partition(n, limit, str) {
//         const i;
//         if (n > 0) {
//             const k = Math.min(n, limit);
//             for (let i = k; i > 0; i--) partition (n-i, i, str + '+' + i);
//         }
//         else {
//             partitionResultString += str + '\n';
//             count++;
//         }
//         return { string: partitionResultString, count: count };
//     }
//
//     var n = parseInt (partitionForm.partitionLimit.options
//         [partitionForm.partitionLimit.selectedIndex].value);
//     if (n<1 || n>limit) { n = limit-5; doClearPartition (); }
//     var partition = partition (n, n, n + '=');
//     document.partitionForm.partitionResult.value =
//         'Всего: ' + partition.count + '\n' + partition.string;
// }







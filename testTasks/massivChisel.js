
//Написать функцию sostavChisla(massivChisel: number[], chislo: number),
//   которая бы находила все возможные комбинации чисел из massivChisel,
//   сумма которых равна chislo. При этом:
//   1) massivChisel содержит, только уникальные положительные числа (> 0)
//   2) в комбинации не должно быть повторений чисел
//   3) все комбинации должны быть уникальными
// возврат {
//       chislo: 5,
//       massivChisel: [8, 2, 3, 4, 6, 7, 1],
//       result: [[2, 3], [4, 1]]
//     }

//ХОРОШЕЕ РЕШЕНИЕ НО НЕ ПОДХОДИТ

let findCombinations = (arr, number) => {
    let result = [];
    for(let j = 0; j < arr.length; j++) {
        for(let i = 1; i < arr.length; i++) {
            result.push([arr[j], arr[i]])
        }
    }

    let filterResult = result.filter(f => f[0]+f[1] === number);
    // let unique = [];
    // for(let i = 0; i < filterResult.length; i++) {
    //     if(filterResult[i][0] !== filterResult[i+1][0]) {
    //         let item = filterResult[i]
    //         console.log(item)
    //         return unique.push(item)
    //     }
    // }
    return filterResult
}
console.log(findCombinations([8, 2, 3, 4, 6, 7, 1], 5));

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
console.log(typeof findCombinationsVerTwo)


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

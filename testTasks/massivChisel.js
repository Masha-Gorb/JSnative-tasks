
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

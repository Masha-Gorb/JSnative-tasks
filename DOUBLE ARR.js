//task 1
let studentsScores = [
    [1,0,1,1,0,0,1],
    [0,0,0,1,1,1,0],
    [1,1,1,1,0,0,1],
    [1,1,1,1,0,0,1],
];

function sumOfAllStudentsScore(arr) {
    let scoresForEachTask = [];

    for(let i = 0; i <= arr[0].length; i++) {
        let arrOfSimilarIndex = arr.map(m => m[i]);
        let notSolvedArr = arrOfSimilarIndex.filter(f => f === 0);
        let howMuchScoreToAdd = 1 + notSolvedArr.length;
        let scoresForOneTask = arrOfSimilarIndex.map(m => m === 1 ? m = howMuchScoreToAdd : m)
        scoresForEachTask.push(scoresForOneTask);
    }

    let arrOfSumOfScores = [] ;

    for(let i = 0; i <= scoresForEachTask.length; i++) {
        let arrOfSimilarIndexForEachStudent = scoresForEachTask.map(m => m[i]).filter(f => f !== undefined);
        let scoreSumForEachStudent = arrOfSimilarIndexForEachStudent.reduce((acc, num) => acc + num, 0);
        arrOfSumOfScores.push(scoreSumForEachStudent);
    }
    return arrOfSumOfScores.filter(f => f > 0);
}

console.log(sumOfAllStudentsScore(studentsScores))

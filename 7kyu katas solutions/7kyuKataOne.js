//7kyu task
//задачка с объектом!
//ВАЖНО
// Object.values(нужный объект) = массив из всех значений
//Object.keys(нужный объект) = массив всех ключей
//объект[нужное свойство строкой] - если надо достучаться до значения извне

let a = {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}
let bossName = 'laura'

let sumOfAllScores = Object.values(a).reduce((a,b) => a+b) + a[boss]
let result = sumOfAllScores/11

function outed(meet, boss){
    let sumOfAllScores = Object.values(meet).reduce((a,b) => a+b) + meet[boss]
    let result = Math.round(sumOfAllScores) / 11
    console.log(result)
    if(result <= 5) {
        return 'Get Out Now!'
    } else
        return 'Nice Work Champ!'
}
console.log(outed(a, bossName))

//7куи ката: сделать массив, в котором значение 1 и значение 2 будут повторятся столько раз сколько число
let fooForThiskata = (n, firstValue, secondValue) => {
    let solutionArr = [firstValue, secondValue]
    for (let count = n; count > 0; count--) {
        if (count%2 === 0) {
            solutionArr.push(secondValue)
        } else {
            solutionArr.push(firstValue)
        }
    }
    solutionArr.pop()
    solutionArr.pop()
    return solutionArr

}
let n = 20
let firstValue = 'blue'
let secondValue = 'red'

let ArrRr = fooForThiskata(n, firstValue, secondValue)

let answerArr = [ 'blue',
    'red',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue' ]
console.log(ArrRr)
console.log(answerArr)
console.log(answerArr === ArrRr)
//вообщем тут я зашла в тупик, так как при четном n записывалось сперва значение2 а потом значение1
//решение такое максимально близкое к тому о чем я думала
function opposite(n, firstValue, secondValue){
 let store = [];
    for(let i = 0; i < n; i++){
        if(store.length < n) store.push(firstValue, secondValue)
    }
    if(store.length === n + 1) return store.slice(0,-1)
    return store;
}
// или такое
function alternate2(n, firstValue, secondValue){
  var theArray=[];
  for(var i=0;i<n;i++){
    if(i%2===0){
      var firstArray=theArray.push(firstValue);
    }else {
      var secondArray=theArray.push(secondValue);
    }

  }
   return theArray;
  }
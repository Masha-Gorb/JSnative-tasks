//7kyu kata: приходит [[10,0],[3,5],[5,8]] - надо сложить числа во всех вложенных массивах
//а затем сложить все элементы массива -.reduce((a,b)=>a+b)

let busStops = [[10,0],[3,5],[5,8]]
let testRes = busStops.map(m => m[0]-m[1]).reduce((a,b)=>a+b)
console.log(testRes)
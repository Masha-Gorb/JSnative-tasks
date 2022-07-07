//TASK 1
// console.log(5 + '2') //'52'
// console.log(5 - '2') //3 неявное приведение типов к числу
// console.log(5 * '2') //10
// console.log('6' / '2') //3
// console.log('6' * '2') // 12
// console.log('6' + '2') //'62' конкатинируем
// console.log('6' - '2') // 4
// //!!1 - true, !!0 - false - бинарный оператор, !0 - true, !1 - false - унарный оператор
// //+'10' - приведение к числовому значению (Number('10'))
// //10..toString() - приведение числа к строке
// console.log(true + true) //2
// console.log('2' + true) //'2true'
// console.log([1,3,5] + {})
// console.log(null === undefined) //false
// console.log(undefined === undefined) //true
// console.log(null === null) //true

//TASK 2.1
// написать метод массива map чтобы применялся к обоим массивам
// const nums = [1, 2, 3, 4];
// const names = ['Hanna', 'Alex'];
//
// Array.prototype.myMap = function (callback, ...args) { //args аргументы для продвинутого чото там ))
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(callback(this[i], i, this)) //
//     }
//     return newArr
// }
// console.log(
//     nums.myMap((n) => { return  n + 1} ) //[2, 3, 4, 5]
// )
//
// console.log(
//     names.myMap((n, i) => ({ name: n, index: i })) //[ { name; 'Hanna', index: 0 }, { name: 'Alex', index: 1 } ]
// )

//TASK 2.2
//написать свой filter чтобы применялся к обоим массивам
// const nums = [1, 2, 3, 4];
// const names = ['Hanna', 'Alex']
//
// Array.prototype.myFilter = function (callback, ...args) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             newArr.push(this[i])
//         }
//     }
//     return newArr
// }
//
// console.log(
//    nums.myFilter(n => n % 2 === 0) //[2, 4]
// )
//
// console.log(
//    names.myFilter(n => n.indexOf('e') >= 0) //['Alex']
// )

//TASK 3
//написать ф-цию promisify чтобы мы могли работать с readFile не через коллбеки, а как с промисом
//promosify принимает в себя readFile и возварщает новую ф-цию readFileWithPromise
// const readFile = (path, cb) => {
//    if (path !== '/test.txt') {
//        cb('File not found!')
//    } else {
//        cb(null, { group: 'KMB-1', name: 'Alex' })
//    }
// }

// const readFile = (path) => {
//     if (path !== '/test.txt') {
//         return 'File not found!'
//     } else {
//         return {group: 'KMB-1', name: 'Alex'}
//     }
// }
// // readFile("/test.txt", (err, data) => {
// //     if (err) throw new Error(err)
// //     console.log(data)
// // })
//
// const promisify = (readFile) => (path) => {
//         return new Promise((resolve, reject) => {
//             let a = readFile(path)
//             if (typeof a === 'object') {
//                 return resolve(a)
//             } else {
//                 return reject(a)
//             }
//         })
// }
//
// const readFileWithPromise = promisify(readFile)
//
// readFileWithPromise('/test.txt')
//     .then(data => console.log(data)) //{ group: 'KMB-1', name: 'Alex' }
//     .catch(e => console.log(`Error: ${e}`))
//
//
// readFileWithPromise('/invalid')
//     .then(data => console.log(data))
//     .catch(e => console.log(`Error: ${e}`)) //Error: File not found!

//TASK 4
//  const a = {}
//  const b = {}
// //{}.toString = '[object Object]'
// a['name'] = 'b' //
// console.log(a)

//TASK 5
// 'use strict';
//     (() => {
//     let u = g = 42 // g - неявное объявление в нестрогом режиме
// })() //самовызывающаяся ф-ция
// console.log(typeof u === 'undefined')
// console.log(typeof g === 'undefined')
//
// console.log(typeof u)
// console.log(typeof g)

//TASK 6 - сделали до сюда в понедельник
// const a = {
//     name: 'Jo',
//     age: 23,
//
//     getName: () => {
//         return this.name
//     },
//     getAge: function() {
//         const age = 24
//         return this.age
//     }
// }
//
// console.log(a.getName()) //window
// console.log(a.getAge()) //23

// //TASK 7
// Object.prototype.getName = function() {
//     return this.name
// }
// const a = { name: 'a'}
// const b = { name: 'b'}
// const c = { name: 'c'}
//
// console.log(
//     a.getName
//         .bind(b)
//         .bind(c)()
// ) //b
//
// console.log(
//     a.getName()//результат работы метода не ф-ция а строка
//         .bind(c)
//         .call(b)
// ) //ошибка

//TASK 7.1
// function User(name) {
//     this.name = name
//     return 'User lol'
// }
//
// class Car {
//     constructor(engine) {
//         this.engine = engine
//         return {}
//     }
// }
//
// const user = new User('Timur')
// const user2 = User('Gosha')
// const car = new Car('Moskvich')
//
// console.log(user.name) //timur
// console.log(user2.name) //undef
// console.log(car.engine) //undefined

// TASK 7.2
// function User (name) {
//     this.name = name
//     return this
// }
//
// const admin = new User('Grisha')
// const developer = User('Anna')
//
// name = 'Victor'
//
// console.log(admin.name) //grisha
// console.log(developer.name) //victor

//TASK 8
// const user = {
//     name: 'Anton',
//     hello: function() {
//         const name = 'Sasha'
//         console.log(`Hello, ${this.name}`)
//     }
// }
// setTimeout(user.hello.bind(user), 1000)

//TASK 9
//пояснить чем будет являтся this в каждом из вызовов
// const a = {
//     toString() {
//         return 'a'
//     },
//
//     go: function () {
//         console.log(this.toString())
//     },
//
//     run: () => {
//         console.log(this)
//     },
//
//     stop: function () {
//         (() => {
//             console.log(this)
//             })()
//     }
// }
//
// a.go() //'a'
// a.run()
// a.stop()

//TASK 10
// const a = {
//     name: 'a',
//     getName: function() {
//         console.log(this.name)
//     }
// }
// const b = Object.assign( a, {name: 'b'} )
// const c = Object.create(a, {
//     name: {
//         value: 'c',
//         configurable: false,
//         writable: false,
//         enumerable: false
//     }
// })
//
// b.getName() //a
// c.getName() //c
//
// console.log(c.__proto__ === a )

//TASK 11
// function Main () {}
// Main.prototype.protected = {protected: true}
//
// const obj = new Main();
// // console.log(obj.protected)
//
// Main.prototype = {protected: false};
// const obj2 = new Main();
// console.log(obj.protected)
// console.log(obj2.protected)
//
// const obj3 = new Main();
// Main.prototype.protected = 'lol'
//
// console.log(obj3.protected)

//TASK 12
// Promise
//     .resolve(10)
//     .then(res => console.log(res)) //10
//     .then(res => Promise.resolve(res))
//     .then(console.log)//undefined
//     .then(res => {                              //!!string приводим к булевому типу -> false -> true
//         if (!res) throw new Error('New Error') //!string приведение к булевому типу и отрицание -> !true -> false
//     })
//     .then(res => console.log(res.message))
//     .catch(res => console.log(res.message))

//Tasks from 22.03

//TASK 1
// const foo = () => {
//     const bar = () => {
//         console.log('bar')
//     }
//
//     bar()
//     baz()
//
//     const baz = () => {
//         console.log(bazLog)
//     }
//
//     const bazLog = 'baz';
// }
//
// foo()

//TASK 2
// (() => {
//     let a = b = 5
// })() //ф-ция это блок видимости, внутри которого мы ниче не видим кроме того что выносится в глобальный область видимости
//
//
// const c = {
//    showB() {
//        console.log(b)
//    }
// }
//
// c.showB()  //5


//TASK 3
// const a = (x, y) => {
//
//     console.log(y)
//
//     return {
//         a: (z) => {
//             a(y, z)
//         }
//     }
// }
//
// const res = a(1)
//
// res.a(2)
// res.a(3)
// res.a(4)


// TASK 4
// const user = {
//
//    _data: {
//        name: "Colin"
//    },
//
//    _methods: {
//        _getName: function () {
//            return this.name;
//        },
//    },
//
//    getName() {
//        return this._methods._getName()
//    }
// }
//
// console.log(
//    user.getName()
// )

//TASK 5
// const getCatCreator = () => (
//     class Cat {
//         constructor(name) {
//             this.name = name
//             return 'No cat name' //игнорируется тк примитив, возвращает класс
//         }
//     }
// )
//
// const cat = new (getCatCreator())("Cat name!")
//
// console.log(cat.name)


//TASK 6
// let animal = {
//     eats: true
// }
//
// function Rabbit(name) {
//     this.name = name
// }
//
// let rabbit = new Rabbit('White Rabbit')
//
// Rabbit.prototype = animal
//
// console.log(rabbit.eats)

// function Rabbit(name) {
//     this.name = name;
// }
//
// let rabbit = new Rabbit("White Rabbit");
// let rabbit2 = new rabbit.constructor("Black Rabbit");
// console.log(rabbit)
// console.log(rabbit2)

//WTF???
// function Rabbit() {
// }
//
// // Rabbit.prototype = {jumps: true }
// console.dir(Rabbit)
//
// let rabbit = new Rabbit();
//
// console.dir(rabbit.constructor)
// console.log(rabbit.constructor === Rabbit)


// const a = {
//     toString() {
//         return 'key of a'
//     },
//     b: {
//         name: 'b'
//     }
// }
//
// const c = {};
// c[a] = 'a'
// // console.log(c)
//
// c.b = a.b.name
// console.log(c)


String.prototype.add = function (str) {
    return this + str
}

const arr = [1, 2, 3]

console.log(
    arr
        .join("a") //'1a2a3'
        .replaceAll("a", '0,') //'10,20,3'
        .add("0") //'10,20,30'
        .split(",") //['10', '20',  '30']
        .map(n => +n) //[10, 20, 30]
        .reduce((acc, n, i, arr) => {
            acc[n] = n
            return acc
        }, {}) //{}
)
//acc - место где будем накапливать значение
//     [10, 20, 30].reduce((acc, n, i, arr) => {
//         // console.log(acc, n, i, arr)
//         // console.log(acc+n)
//         return acc+n
// }, 100)

// //ката 8 куи. дана строка, надо вернуть строку с поменяными местами словами
// //решение мое
// function nameSuffle(str){
//     var arr = str.split(" ");
//     return arr[1] + ' ' + arr[0]
// }
// //бест практис
// function nameSuffle(str){
//   return str.split(' ').reverse().join(' ')
// }

//ката 8куи. дана строка, надо вернуть строку где каждая буква удвоена
// console.log('new task')
//
// let str = 'Hello world'
// let arr11 = str.replace(/./g, m => Array(3).join(m))
//
// console.log(arr11)

//ката 8куи: написать прототип для стринги, который бы проверял капсом ли написана строка
// String.prototype.isUpperCase = function() {
//     // your code here
//     if (this.toUpperCase() == this) {
//         return true
//     } else {
//         return false
//     }
// }

//7куи ката: из длинного числа надо вернуть длинное число где все числа в квадрате
// //размышления :)))
// let num = 3212
// let strNum = num.toString()
// let arr11 = strNum.split('').map(m => +m * +m).join(' ').replace(/\s/g, '')
// let result = parseInt(arr11)
// console.log(arr11.replace(/\s/g, ''))
// console.log(result)
// //решение :
// function squareDigits(num){
//     let result = num.toString().split('').map(m => +m * +m).join(' ').replace(/\s/g, '')
//     return parseInt(result)
// }

//7куи сложная таска: дано число и массив функций, надо прогнать число через все функции в массиве
//решение
//function chain(input, fs) {
//   return fs.reduce(function(input, fs) { return fs(input) }, input)
// }

//7куи ката: понять, есть ли вторая строка в конце (!!) первой строки
//метод строки includes узнает есть ли одна строка в другой (но по всей длине)
//решение
// function solution(str, ending){
//     return str.endsWith(ending)
// }
//оказывается есть чисто метод endsWith(), куда в скобках передается окончание...

//7куи ката: сделать массив, в котором значение 1 и значение 2 будут повторятся столько раз сколько число
// let fooForThiskata = (n, firstValue, secondValue) => {
//     let solutionArr = [firstValue, secondValue]
//     for (let count = n; count > 0; count--) {
//         if (count%2 === 0) {
//             solutionArr.push(secondValue)
//         } else {
//             solutionArr.push(firstValue)
//         }
//     }
//     solutionArr.pop()
//     solutionArr.pop()
//     return solutionArr
//
// }
// let n = 20
// let firstValue = 'blue'
// let secondValue = 'red'
//
// let ArrRr = fooForThiskata(n, firstValue, secondValue)
//
// let answerArr = [ 'blue',
//     'red',
//     'red',
//     'blue',
//     'red',
//     'blue',
//     'red',
//     'blue',
//     'red',
//     'blue',
//     'red',
//     'blue',
//     'red',
//     'blue',
//     'red',
//     'blue',
//     'red',
//     'blue',
//     'red',
//     'blue' ]
// console.log(ArrRr)
// console.log(answerArr)
// console.log(answerArr === ArrRr)
//вообщем тут я зашла в тупик, так как при четном n записывалось сперва значение2 а потом значение1
//решение такое максимально близкое к тому о чем я думала
//function opposite(n, firstValue, secondValue){
//  let store = [];
//     for(let i = 0; i < n; i++){
//         if(store.length < n) store.push(firstValue, secondValue)
//     }
//     if(store.length === n + 1) return store.slice(0,-1)
//     return store;
// }
// или такое
//function alternate(n, firstValue, secondValue){
//   var theArray=[];
//   for(var i=0;i<n;i++){
//     if(i%2==0){
//       var firstArray=theArray.push(firstValue);
//     }else {
//       var secondArray=theArray.push(secondValue);
//     }
//
//   }
//    return theArray;
//   }

//7куи ката: дан массив и число, надо вернуть массив из прошлого массива тока четные столько же сколько число
// let arrForThisKata = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// //[2, 4, 6, 8] => [4, 6, 8] - должно так стать
// let numForThisKata = 3
//
// function evenNumbers(array, number) {
//     let newArr = array.filter(f => f%2 === 0).reverse()
//     newArr.length = number
//     return newArr.reverse()
// }
// console.log(evenNumbers(arrForThisKata, numForThisKata))
//решение выше подходит
//решение ниже как пример более элегантного решения
//const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

//7kyu kata
//сделать каждую вторую букву в строке заглавной
// let testString = "stop making spongebob memes!"
// function spongeMeme(sentence) {
//     let arr = sentence.split('')
//     return arr.map((v,i)=>i%2!==0?v.toLowerCase():v.toUpperCase()).join('')
// }
// //блядь!!!! в map можно оказ и индекс передавать сукааа
//
// console.log(spongeMeme(testString))

//7kyu kata - из объекта сделать квери строку
// function toQueryString (obj) {
//     for (const property in object) {
//         return (`${property}: ${object[property]}`)
//     }
// }
// let testObj = { a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' }
// let testObj2 = { foo: [ 1, 3 ], bar: [ 2, 4 ] }
//  console.log(toQueryString(testObj))
//
// //
// // // expected output:
// // // "a: 1"
// // // "b: 2"
// // // "c: 3"

// const params = new URLSearchParams({ foo: [ 1, 3 ], bar: [ 2, 4 ] });
// console.log(params);

// const buildURLQuery = obj =>
//     Object.entries(obj)
//         .map(pair => pair.map(encodeURIComponent).join('='))
//         .join('&');
//
// console.log(buildURLQuery(testObj2))

//'foo=1&foo=3&bar=2&bar=4'

// const testObj2 = { foo: [ 1, 3 ], bar: [ 2, 4 ] };
//
// for (const property in testObj2) {
//     console.log(`${property}: ${testObj2[property]}`);
// }
//
// console.log(testObj2.foo.map(m => 'foo=' + m + '&'))
// так и не смогла решить эту задачу

// 7kyu kata убрать из строки все гласные
// let str = "This website is for losers LOL!"
// let arr444 = str.split('').filter(f => f !== 'e')
//     .filter(f=> f !== 'o').
//     filter(f => f !== 'i').
//     filter(f=> f !== 'u').
//         filter(f => f !== 'O').join('')
// console.log(arr444)
//самое лоховское решение евар
// function disemvowel(str) {
//     return str.split('').filter(f => f !== 'e')
//         .filter(f=> f !== 'o').
//         filter(f => f !== 'i').
//         filter(f => f !== 'a').
//         filter(f=> f !== 'u').
//         filter(f => f !== 'E')
//         .filter(f=> f !== 'O').
//         filter(f => f !== 'I').
//         filter(f=> f !== 'U').
//         filter(f => f !== 'A')
//         .join('')
// }
// норм решение с фильтром (не оч мне понятное)
//function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//
//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }
//норм решение с инклюдом
//const vowels = 'aeiou';
//
// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }

//7kyu task вывести серединную букву в стринге
// let testStr1 = 'test'
// let testStr2 = 'testing'
//solution
//function getMiddle(s) {
//     if (s.length % 2 == 0)
//         return s.substring(s.length / 2 - 1, s.length / 2 + 1);
//     else
//         return s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
// }

//8kyu task мудреная таска фу
// let sheepArr = ["sheep", "sheep", "sheep", "wolf", "sheep", 'wolf']
//
// function foo(arr) {
//     let arr2 = arr.reverse()
//     if (arr2[0] !== 'wolf') {
//         function IsWolf(element) {
//             const danger = 'wolf'
//             return element === danger
//         }
//
//         let a = arr2.findIndex(IsWolf)
//         return 'Oi! Sheep number ' + a + '! You are about to be eaten'
//     } else {
//         return 'Pls go away and stop eating my sheep'
//     }
//
// }
//
// console.log(foo(sheepArr))

//8kyu task
// function pillars(numPill, dist, width) {
//     // your code here
//     if (numPill === 1) {
//         return 0
//     } else {
//         let result = ((dist*100)*(numPill-1)) + (width*(numPill-2))
//         return result
//     }
// }

//7kyu kata: приходит [[10,0],[3,5],[5,8]] - надо сложить числа во всех вложенных массивах
//а затем сложить все элементы массива -.reduce((a,b)=>a+b)

// let busStops = [[10,0],[3,5],[5,8]]
// let testRes = busStops.map(m => m[0]-m[1]).reduce((a,b)=>a+b)
// console.log(testRes)

//7kyu task
//задачка с объектом!
//ВАЖНО
// Object.values(нужный объект) = массив из всех значений
//Object.keys(нужный объект) = массив всех ключей
//объект[нужное свойство строкой] - если надо достучаться до значения извне

// let a = {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}
// let bossName = 'laura'

// let sumOfAllScores = Object.values(a).reduce((a,b) => a+b) + a[boss]
// let result = sumOfAllScores/11

// function outed(meet, boss){
//     let sumOfAllScores = Object.values(meet).reduce((a,b) => a+b) + meet[boss]
//     let result = Math.round(sumOfAllScores) / 11
//     console.log(result)
//     if(result <= 5) {
//         return 'Get Out Now!'
//     } else
//         return 'Nice Work Champ!'
// }
// console.log(outed(a, bossName))

//8kyu task найти ближайшее квадратное число к вводимому числу
//new Math.pow !!

// let foo1 = (num) => {
//    return Math.pow(Math.round(Math.sqrt(num)), 2)
//

console.log('new task')






//LESSON 1
//Объекты: объекты (проверяем typeof), массивы (проверяем .isArray), функции (проверяем typeof)
//let a = [];
//console.log((Array.isArray(a)));
// let a = {} — литерал объекта, который тыры пыры приводит к созданию объекта в памяти браузера

let student = {
    name: 'Ann',
    friends: ['Olga', 'Loren', 'Vera']
}

let copyStudent = {...student};
// console.log(student);
// console.log(copyStudent);
copyStudent.friends.push('Mary');
// console.log(student);
// console.log(copyStudent);
let deepCopyStudent = {...student, friends: [...student.friends, 'Carla']}
//глубокое копирование имеет смысл когда небольшой уровень вложенности
//можно подкл библ Lodash со встроенными функциями https://lodash.com/

// console.log(deepCopyStudent);
// console.log(student)


//LESSON 2
//урок про то как устроен внутри map, в целом суть в том что 
//внутри методов массивов (да и в целом методах) работают обычные циклы

//LESSON 3
//чекнуть введения в браузерные события https://learn.javascript.ru/introduction-browser-events
//"Событие" -> event
//ищет обработчик -> функция (обработчик, слушатель, коллбек, подписчик)
//Браузер генерирует объект со сведениям о прошедшем событии -> e, ev, event
//вызывает обработчик с объектом в кач-ве параметра
//e-target - элемент который сгенерировал событие (первый получил клик) 
//не хватило у меня сил моральных дослушать до конца про браузерные события

// const sml = document.getElementById('small');

// const onClickHandler = (e) => {
//     // console.log(e)
// }

// sml.onClick = onClickHandler
// sml.addEventListener('click', onClickHandler);

//LESSON 4 
//структура данных когда много тудулистов (подготовка к первому занятию вторника)
//кек канеш, смотрю чисто из уважения, потому что плюс/минус не будет такого в будущем ))
//ну хотя бы знаю что тут было

const todoListId_1 = 1;
const todoListId_2 = 2;

const todoLists = [
    {
        id: todoListId_1,
        title: "What to learn", 
        filter: "All",
    },
    {
        id: todoListId_2,
        title: "What to read", 
        filter: "All",
    }
];

const tasks = {
    [todoListId_1]: [ 
        {
            id: 3,
            title: "a",
            isDone: false,
        },
        {
            id: 4,
            title: "b",
            isDone: false,
        },
    ],

    [todoListId_2] : [
        {
            id: 5,
            title: "c",
            isDone: false,
        },
        {
            id: 6,
            title: "d",
            isDone: false,
        },
    ]
};

//метод reduce (корень - сокращать, уменьшать) - сводит массив к одному значению
//классическая задача - получить сумму элементов массива
//принимает один обяз параметр - коллбек ф-ция, которая выполняется для каждого эл-та исходно массива

const numbers = [1, 2, 3, 5, 6, 7];
console.log(numbers.reduce( (acc, el) => acc+el, 0) );

const men = [
    {name: 'Nick',
    age: 40,
    isMarried: false,},

    {name: 'bob',
    age: 25,
    isMarried: true,},

    {name: 'karl',
    age: 34,
    isMarried: true,},
];

console.log(men.reduce( (acc, el) => {
    if(el.name === 'bob') {
        let copyBob = {...el, isMarried: false}
        acc.push(copyBob)
        return acc 
    }
    acc.push(el)
    return acc
}, [])) //как стартовое значение надо добавить пустой массив чтобы ?? метод понял что с массивом работаем

//LESSON 5 
//bubble sort

const arr = [3, 6, 46, 2876, 4, 23, 67, 309, 14];

for (let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
        let temp = arr[i+1]
        arr[i+1] = arr[i]
        arr[i] = temp
    }
}
}
  console.log(arr)

  //разобрали sort и reverse

  //LESSON 6 
  //ништяк, тестик !
  
  console.log('BELOW ARE EXAM ANSWERS')


  const students = [
      {
          name: 'Chris',
          age: 20,
          isMarried: true,
          scores: 105,
      },
      {
        name: 'Ann',
        age: 25,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'Helen',
        age: 27,
        isMarried: true,
        scores: 110,
    },
    {
        name: 'Nick',
        age: 38,
        isMarried: false,
        scores: 89,
    },
    {
        name: 'Paul',
        age: 35,
        isMarried: false,
        scores: 122,
    },
    {
        name: 'Tom',
        age: 31,
        isMarried: false,
        scores: 115,
    },
      
  ]

  const user = {
    friends: 30,
    age: 20,
    friends: ['Nick', 'Alex', 'Helen']
};

  //1. сделать поверхностную копию объекта user 
  let copyUser = {...user}
  console.log(user === copyUser);
  console.log(user.friends === copyUser.friends)
  
  //2. полная глубокая копия объекта user

let deepCopyUser = {
    ...user,
    friends: [...user.friends]
}
console.log(deepCopyUser === user);
console.log(deepCopyUser.friends === user.friends)

  //3. поверхностная копия массива students
  let copyStudents = [...students];
  console.log(students === copyStudents)

  //4. полная глубокая копия массива students
  let deepCopyStudents = students.map(c => ({...c})); //????
  console.log(deepCopyStudents)

  //5. отсортировать deepCopyStudents по алфавиту (sort)
  let sortByName = copyStudents.sort((a, b) =>  a.name > b.name ? 1 : -1)
  console.log('test 5')
  console.log(sortByName)

  //5a. отсортировать по кол-ву баллов
  let sortByScore = students.sort((a,b) => b.scores - a.scores)
  console.log('test 6')
  console.log(sortByScore)

  //6. сформировать массив студентов у которого 100 и более баллов
  
  //6а. вырезать из полученного массива трех лучших (метод splice)

  //6б. Объединить массивы deepCopyStudents и bestStudents так 
  //чтобы сохрнился порядок сортировки (spread оператор)

  //7. сформировать массив холостых студентов (filter)
  let notMarried = students.filter(f => f.isMarried === false)
  console.log(notMarried)

  //8. сформировать массив имен студентов (map)
  let names = students.map(m => m.name)
  console.log(names)

  //9. сформировать строку из имен студентов разделенных 1) запятой, 2) пробелом
  let namesWihtComa = names.join(', ');
  let namesWithSpace = names.join(' ')
  console.log('test 9')
  console.log(namesWihtComa)
  console.log(namesWithSpace)


  //10. Пол женился, выполните соответсвующие преобразования массива (map)
  let newStudents = students.map( s => {
      if (s.name === "Paul") {
          return {...s, isMarried: true}
      }
       else return s });

  console.log('test 10')
  console.log(newStudents)

  //11. найдите студента по имени том
  let tom = students.find(item => item.name === 'Tom')
  console.log(tom)

  //12. Найдите студента с самым высоким баллом

  let bestStudent = students.reduce((acc, cur) => acc.scores > cur.scores ? acc : cur);
  console.log('test 12')
  console.log(bestStudent)

  //13. Найдите сумму баллов всех студентов

  let scoresSum = students.reduce( (acc, cur) => acc + cur.scores, 0);
  console.log('test 13')
  console.log(scoresSum);

  //14. Напишите функцию addFriends которая принимает параметром массив students
  //и добавляет каждому студенту св-во friends, значением которого 
  // является массив имен всех остальных студентов кроме владельца

  const addFriends = (students) => {
      return students.map( s => ({...s, friends: students.map (s => s.name).filter(st => st !== s.name )}))
  };
  let lastTest = addFriends(students);
  console.log(lastTest);

  //Codewars task 
  console.log('THIS IS CODEWARS TASK')
  let dna = "GACCGCCGCTTTC"
  console.log(dna.replace(/T/g, "U"))
  //метод риплейс запомнить надо, важно!!!

  //Codewars task 
const findRent = (d) => {
    let rentPrice = d * 40
    if (d >= 7 && d < 3) {
        return rentPrice - 50
    } else if (d >= 3) {
        return rentPrice - 20
    } else return rentPrice
}

//Codewars task
function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter(f => f%2 === 0)
  }

//codewars task

let l = 6.3
let w = 4.5
let h = 3.29

let standartRoll = 0.52 * 11.5;
  let sideA = 6.3*3.29*2;
  console.log(sideA)
  let sideB = 4.5*3.29*2;
  console.log(sideB)
  let allRoomPerimetr = (sideA + sideB);
  console.log(allRoomPerimetr)
  console.log(standartRoll)
  let rollCount = allRoomPerimetr / standartRoll;
  console.log(rollCount)


// function wallpaper(l, w, h) {
//     // your code
//   let standartRoll = 0.52 * 11.5;
//   let sideA = l*h;
//   let sideB = w*h;
//   let allRoomPerimetr = (sideA + sideB)*2;
//   let rollCount = allRoomPerimetr / standartRoll;
//   console.log(rollCount)
  
//   numbers = ["zero", "one", "two", "three", "four", 
//              "five", "six", "seven", "eight", "nine", "ten", 
//              "eleven", "twelve","thirteen", "fourteen", "fifteen", 
//              "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

// }

//codewars task
//my solution but 
function perimeterSequence(a,n) {
    // your code
    let perimetrOneCub = a+a; //периметр одного квадрата
    let cubCount = 2*n;
    return perimetrOneCub*cubCount;
  }

  //this i need to understand
  function perimeterSequence(a,n) {
    // your code
    let sum = 0;
    for(let i = 0 ; i < n; i++) {
      sum += 4 * a;
    }
    return sum;
  }

  //codewars task easy one
  //string to number
  function getAge(inputString){
    // return correct age (int). Happy coding :)
      return parseInt(inputString)
    }

    //codewars task
    let n = 5;
    const foo = (n) => {
        if (n%n !== 0 && n%1 !== n) {
            return n+1 
        } else {
            return n
        }
    }

    //first codewars 2022 
    function enough(cap, on, wait) {
        // your code here
        let result = cap - (on + wait);
        if (result >= 0 ) {
          return 0
        } else {
          return Math.abs(result)
        }
      }

      // codewars kata 
      function getGrade (s1, s2, s3) {
        // my solution 
        let score = (s1+s2+s3)/3
        if (0 <= score && score < 60) {
          return "F" 
        } else if (60 <= score && score < 70) {
          return "D"
        } else if (70 <= score && score < 80) {
          return "C"
        } else if (80 <= score && score < 90) {
          return "B"
        } else {
          return 'A'
        }
      }
// best practice
      function getGrade (s1, s2, s3) {
        avg = (s1+s2+s3)/3;
        if (avg < 60)  return "F";
          else if (avg < 70) return "D";
          else if (avg < 80) return "C";
          else if (avg < 90) return "B";
          else return "A";
      }


      //codewars 7kyu kata - remove self-duplicates items in array
      let arrKata7 = [3, 4, 4, 3, 6, 3];
      function solution(arrKata7){
        let newArr = [];
        while(arrKata7.length > 0){
          const poppedElement = arrKata7.pop()
          if (!newArr.includes(poppedElement)) {
            newArr.push(poppedElement)
          }
        }
        console.log(newArr.reverse)
      }
      solution(arrKata7);

//codewars 7kyu kata
      console.log('new task')

    let x = 'aaaaaddddr'
    let total1 = x.split('').map(m => m.charCodeAt(0)).join('');
    let total2 = total1.replace(/[7]/g, '1');
    let total1Sum = total1.split('').reduce((partialSum, a) => partialSum + parseInt(a), 0)
    let total2Sum = total2.split('').reduce((partialSum, a) => partialSum + parseInt(a), 0)
    let result = total1Sum - total2Sum

console.log(total1, total2, total1Sum, total2Sum, result)

// codewars 8kyu kata solution
function well(x){
    let newArr = x.filter(f => f === "good")
    if (newArr.length >= 3) {
        return 'I smell a series!'
    } else if (newArr.length < 1) {
        return 'Fail!'
    } else {
        return 'Publish!'
    }
}

//codewars 8kyu kata
let stringX = "Abba"
let reverseX = stringX.split("").reverse().join("");
//solution
// return x.toLowerCase().split("").reverse().join("") === x.toLowerCase() ? true : false

//codewars 8kyu kata
let strThisKata = '3:4';
let strThisKataToNumber = strThisKata.split(":").map(m => Number(m))
console.log(strThisKataToNumber)

console.log('TRAINING MAP FILTER')

let dogs = [
    {
        name: 'Jack',
        age: 2,
        color: 'braun',
    },
    {
        name: 'Jo',
        age: 4,
        color: 'white',
    },
    {
        name: 'Jessica',
        age: 6,
        color: 'black',
    },
    {
        name: 'Jannet',
        age: 1,
        color: 'tricolor',
    },
]
//MAP
Array.prototype.myMap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push( cb(this[i]));
    }
    return newArr;
}
console.log(dogs.myMap( (d) => d.name))
console.log(dogs.map((d) => d.name))

//FILTER
Array.prototype.myFilter = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            newArr.push( this[i]);
        }
    }
    return newArr;
}

console.log(dogs.filter( d => d.age > 2))
console.log(dogs.myFilter( d => d.age > 2))

console.log('PROMISE TRAINING')
let prom = new Promise( (resolve, reject) => {

})
console.log('prom', prom)

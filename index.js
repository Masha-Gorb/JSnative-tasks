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

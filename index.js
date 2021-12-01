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
//ф-ция эта принимает 2 параметра: первый это резалт функции, второй - стартовое значение (не обяз) 

const numbers = [1, 2, 3, 5, 6, 7];
console.log(numbers.reduce( (acc, el) => acc+el, 0) );

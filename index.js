// N A T I V E JS LESSON1
//Объекты: объекты (проверяем typeof), массивы (проверяем .isArray), функции (проверяем typeof)
//let a = [];
//console.log((Array.isArray(a)));
// let a = {} — литерал объекта, который тыры пыры приводит к созданию объекта в памяти браузера

let student = {
    name: 'Ann',
    friends: ['Olga', 'Loren', 'Vera']
}

let copyStudent = {...student};
console.log(student);
console.log(copyStudent);
copyStudent.friends.push('Mary');
console.log(student);
console.log(copyStudent);
let deepCopyStudent = {...student, friends: [...student.friends, 'Carla']}
//глубокое копирование имеет смысл когда небольшой уровень вложенности
//можно подкл библ Lodash со встроенными функциями https://lodash.com/
console.log(deepCopyStudent);
console.log(student)

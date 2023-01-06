//ф-ция возвр либо букву по порядковому номеру либо пустую строку
const  getLetter = (name, num) =>  {
    return name[num - 1] || '';
}

console.log(getLetter('Hexlet', 0));
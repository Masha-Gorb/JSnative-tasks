//task 1
const cities = ['Москва', 'Санкт-Петербург', 'Воронеж', 'lol', 'kek'];
const citiesFoo = (arr) => {
    return `${arr.join(', ')}.`
}

console.log(citiesFoo(cities));

//task 2
const toRoundNumber = (num) => {
    let roundedNum;
    if (num % 2.5 < 1) {
        roundedNum = Math.ceil(num)
    } else {
        roundedNum = Math.floor(num)
    }

    let i = 0;
    if (roundedNum % 5 <= 2.5) {
        while (roundedNum % 5 !== 0) {
            roundedNum--
            i++
        }
        return roundedNum
    } else {
        while (roundedNum % 5 >= 2.5) {
            roundedNum++
            i++
        }
        return roundedNum
    }
}

console.log(toRoundNumber(56));



//task 3
const computerCases = (num) => {
    const keyNumArr = num.toString().split('');
    const keyNum = Number(keyNumArr[keyNumArr.length - 1]);
    if (keyNum === 1) {
        return `${num} компьютер.`
    } else if (keyNum > 1 && keyNum < 5) {
        return `${num} компьютера.`
    } else {
        return `${num} компьютеров.`
    }
}

console.log(computerCases(0))

//task 4
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

console.log(isPrime(6))

//task 5
const isIncludes = (...args) => {

    function foo(arr, copies) {
        let map = new Map();
        for (let elem of arr) {
            let counter = map.get(elem);
            map.set(elem, counter ? counter + 1 : 1);
        }
        let res = [];
        for (let [elem, counter] of map.entries())
            if (counter >= copies)
                res.push(elem);
        return res;
    }

    let resArr = [];
    for (let arg of args) {
        resArr.push(foo(arg, 2))
    }

    return foo([].concat(resArr[0], resArr[1]), 2);
}

console.log(isIncludes([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]));

//task 6
const multiplicationTable = (num) => {
    let arr = Array.from({length: num + 1}, (_, i) => i)
    console.table(arr.map(k => arr.map(c => c * k)))
}

multiplicationTable(6);
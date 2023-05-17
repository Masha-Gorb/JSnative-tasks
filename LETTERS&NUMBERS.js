//TASK 2
const testStr = '32bk56c890rrttt'
function decoding (string) {

    //создаем базу буква=номер в алфавите
    const symbolsMap = {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "e": "5",
        "f": "6",
        "g": "7",
        "h": "8",
        "i": "9",
        "j": "10",
        "k": "11",
        "l": "12",
        "m": "13",
        "n": "14",
        "o": "15",
        "p": "16",
        "q": "17",
        "r": "18",
        "s": "19",
        "t": "20",
        "u": "21",
        "v": "22",
        "w": "23",
        "x": "24",
        "y": "25",
        "z": "26",
    }


    //вычленияем первые цифры если они есть
    const firstElArr = string.split('');
    const firstEl = firstElArr.map(m => Number(m)).map(m => isNaN(m) ? m = "z" : m);
    const maxIndex = firstEl.indexOf('z');
    const firstNumberArr = [];
    for (let i = 0; i < maxIndex; i++) {
        firstNumberArr.push(firstEl[i])
    }
    const firstNumber = Number(firstNumberArr.join(''));

    //вычищаем строку чтобы были только пары буквы+числа
    const clearStr = string.split('').splice(maxIndex).join('')
    console.log(clearStr)

    //собираем массив чисел
    const onlyNumbers = clearStr.replace(/([a-z])/g, ' ');
    const numbersArr = onlyNumbers.split(' ').filter(f => f !== "")
    console.log(numbersArr)

    //собираем массив букв
    const onlyLetters = clearStr.replace(/([0-9])/g, ' ');
    const lettersArr = onlyLetters.split(' ').filter(f => f !== "")
    console.log(lettersArr);

    //переводим буквы в числа
    const lettersIntoNumbers = lettersArr.map(m => m.replace(/./gi,$0=>symbolsMap[$0]||$0))
    console.log(lettersIntoNumbers);

    //вычленяем последние буквы без пары
    //очищаем массив букв от букв без пары
    const lastLettersIntoNumber = []
    if(numbersArr.length < lettersIntoNumbers.length) {
        lastLettersIntoNumber.push(lettersIntoNumbers[lettersIntoNumbers.length-1])
        lettersIntoNumbers.pop()
        console.log('последние буквы но цифрами ' + lastLettersIntoNumber)
    }

    //перемножаем пары буквы+числа
    const notFinalResArr = [];
    for(let i = 0; i < lettersIntoNumbers.length; i++) {
        const res = lettersIntoNumbers[i] * numbersArr[i];
        console.log(res)
        notFinalResArr.push(res)
    }

    //если есть первые числа - кладем ко всем значениям
    if(firstNumber) {
        const notFinalRes1 = [firstNumber, ...notFinalResArr, Number(lastLettersIntoNumber)];
        const notFinalResArr2  = notFinalRes1.map(m => m%2 === 0 ? -m : m);
        console.log('предфинальные слагаемые ' + notFinalResArr2)
        const res = notFinalResArr2.reduce((acc, rec) => acc + rec)
        return res
    } else {
        const notFinalResArr2  = notFinalResArr.map(m => m%2 === 0 ? -m : m);
        const res = notFinalResArr2.reduce((acc, rec) => acc + rec)
        return res
    }
}

console.log(decoding(testStr))

const whileTrainingOne = (start, finish) => {
    let i = start;
    let result = '';
    while (i <= finish) {
        result = `${result}${i}`
        i += 1;
    }
    return result;
}

console.log(whileTrainingOne(2,2))

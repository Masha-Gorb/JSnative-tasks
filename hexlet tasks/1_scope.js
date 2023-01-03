console.log('new task')

const bigLettersCount = (str) => {
    let arr = str.split('');
    let upperCaseChar = arr.filter(el => el.toUpperCase() === el || el === ' ');
    return upperCaseChar.length;
};


const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);

    // BEGIN (write your solution here)
    if (firstCount > secondCount) {
        return 1
    } else if (firstCount < secondCount) {
        return -1
    } else {
        return 0
    }
    // END
};

const greaterThan = (first, second) => (
    compare(first, second) === 1);

const lessThan = (first, second) => (
    compare(first, second) === -1);

const isEqual = (first, second) => (
    compare(first, second) === 0);

console.log(greaterThan('AD', 'ad sd'))

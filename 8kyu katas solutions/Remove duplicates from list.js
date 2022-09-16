function distinct(arr) {
    return arr.reduce((acc, currentValue) => {
        acc.indexOf(currentValue) === -1 && acc.push(currentValue);
        return acc;
    } , []);
}
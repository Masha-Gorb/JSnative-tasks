function fo(arr) {
    return arr.reduce(function(acc, val) {
        return acc * val
    })
}
console.log(fo([1, 2, 3]))


//const grow=x=> x.reduce((a,b) => a*b);


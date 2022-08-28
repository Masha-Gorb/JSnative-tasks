function between(a, b) {
    while(a < b) {
        let arr = [a]
        let newArr = arr.push(a++)
        console.log(newArr)
    }
}

between(1,5)
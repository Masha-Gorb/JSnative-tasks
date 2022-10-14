//вернуть количество делителей на которые можно поделить входное число (шобы оно ответ от деления был целым)

function getDivisorsCnt(n) {
    if (n === 1) {
        return 1
    } else {
        let array = [1]
        let half = Math.floor(n / 2),
            i,
            j
        n % 2 === 0 ? ((i = 2), (j = 1)) : ((i = 3), (j = 2))

        for (i; i <= half; i += j) {
            n % i === 0 ? array.push(i) : false
        }
        array.push(n)
        return array.length
    }
}

//fancy solution
function getDivisorsCnt1(n) {
    for (var d = 0, i = n; i > 0; i--) {
        if (n % i == 0) d++;
    }

    return d;
}
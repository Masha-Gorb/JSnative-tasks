console.log('new task')

function strong(n) {
    let arr2 = String(n).split('').map((el) => {
        function factorial(n){
            var f = "var o = {" +
                "q: '\\\''," +
                "b: '\\\\'," +
                "r: 1," +
                "n: $," +
                "s: 'var o = {q: _q_b_q_q, b:_q_b_b_q, r: _r, n:_n, s: _q_s_q}; o.r *= o.n--; " +
                "o.n ? Object.keys(o).reduce(function(a, k){return a.split(_q__q + k).join(o[k])}, o.s) : o.r;'" +
                "};" +
                "o.r *= o.n--;" +
                "o.n ? Object.keys(o).reduce(function(a, k){return a.split('_' + k).join(o[k])}, o.s) : o.r;"
            f = f.replace("$", n);

            for(var i = 0; i < n; i++){
                if(parseInt(f)){
                    throw new Error("Cheaters are not allowed.");
                }
                f = eval(f);
            }
            return parseInt(f);
        }
        return factorial(el)
    })
    let result = arr2.reduce(function (sum, elem) {
        return sum + elem;
    });
    if (Number(result) === n) {
        return "STRONG!!!!"
    } else {
        return "Not Strong !!"
    }
}

console.log(strong(40585))
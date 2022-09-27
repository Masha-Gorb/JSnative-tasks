function findShort(s){
    return Math.min.apply(null, s.split(' ').map(m => m.length) )
}
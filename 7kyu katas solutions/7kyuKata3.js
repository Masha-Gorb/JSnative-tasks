//7kyu task вывести серединную букву в стринге
let testStr1 = 'test'
let testStr2 = 'testing'
function getMiddle(s) {
    if (s.length % 2 === 0)
        return s.substring(s.length / 2 - 1, s.length / 2 + 1);
    else
        return s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
}
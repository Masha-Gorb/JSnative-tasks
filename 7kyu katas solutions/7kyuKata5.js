//7kyu kata - из объекта сделать квери строку
function toQueryString (obj) {
    for (const property in object) {
        return (`${property}: ${object[property]}`)
    }
}
let testObj = { a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' }
let testObj2 = { foo: [ 1, 3 ], bar: [ 2, 4 ] }
 console.log(toQueryString(testObj))


// // // expected output:
// // // "a: 1"
// // // "b: 2"
// // // "c: 3"

const params = new URLSearchParams({ foo: [ 1, 3 ], bar: [ 2, 4 ] });
console.log(params);

const buildURLQuery = obj =>
    Object.entries(obj)
        .map(pair => pair.map(encodeURIComponent).join('='))
        .join('&');

console.log(buildURLQuery(testObj2))

'foo=1&foo=3&bar=2&bar=4'

const testObj22 = { foo: [ 1, 3 ], bar: [ 2, 4 ] };

for (const property in testObj22) {
    console.log(`${property}: ${testObj22[property]}`);
}

console.log(testObj22.foo.map(m => 'foo=' + m + '&'))
// так и не смогла решить эту задачу
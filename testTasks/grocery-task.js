let state = [
    {
        "categories": ["frozen", "meat"],
        "title": "rrrrr",
    },
    {
        "categories": ["grocery"],
        "title": "eeeee1",
    },
    {
        "categories": ["grocery", "vegetables", "sweets"],
        "title": "eeee2",
    },
    {
        "categories": ["dairy", "sweets"],
        "title": "ffff",
    },
    {
        "categories": ["grocery", "vegetables", "sweets"],
        "title": "aaa",
    },
];
let filter = ["dairy", "sweets", "grocery"]
const foo2 = (arr, f) => {
    let newArrIndex = []
    for (let i = 0; i < arr.length; i++) {
        console.log('+++++++++++++++++' + arr[i].title)
        let arrCategories = arr[i].categories
        for (let j = 0; j < arrCategories.length; j++) {
            for (let k = 0; k < f.length; k++) {
                console.log('f ' + f[k])
                console.log('arr ' + arrCategories[j])
                if(f[k] === arrCategories[j]) {
                    newArrIndex.push(arr[i])
                }
            }
        }
    }
    return [...new Set(newArrIndex)]
}
console.log(foo2(state, filter))

//вар для полного совпадения
// const foo = (arr, f) => {
//     let categories = arr.filter(p => JSON.stringify(p.categories) === JSON.stringify(f))
//     return categories
// }
// console.log(foo(state, filter))

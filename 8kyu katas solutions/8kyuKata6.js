//8kyu task мудреная таска фу
let sheepArr = ["sheep", "sheep", "sheep", "wolf", "sheep", 'wolf']

function foo(arr) {
    let arr2 = arr.reverse()
    if (arr2[0] !== 'wolf') {
        function IsWolf(element) {
            const danger = 'wolf'
            return element === danger
        }

        let a = arr2.findIndex(IsWolf)
        return 'Oi! Sheep number ' + a + '! You are about to be eaten'
    } else {
        return 'Pls go away and stop eating my sheep'
    }

}

console.log(foo(sheepArr))
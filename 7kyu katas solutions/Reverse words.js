//ф-ция которая переворачивает все слова в предложении но выплевывает в нужном порядке предложения
function reverseWords(str) {
    return str.split(' ').map(m => m.split(' ').map(k => k.split('').reverse().join('')).join('')).join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
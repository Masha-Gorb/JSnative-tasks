function reverseWords(str) {
    return str.split(' ').map(m => m.split(' ').map(k => k.split('').reverse().join('')).join('')).join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
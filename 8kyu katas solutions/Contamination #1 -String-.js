function contamination(text, char){
    // Code here ;)
    let arr = text.split('')
    return arr.map(m => char).join('')
}

console.log(contamination("_3ebzgh4", "&"))
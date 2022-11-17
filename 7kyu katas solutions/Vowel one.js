//unresolved task - formally solution ok, but it cant pass tests
function vowelOne(s){
    let arr = s.split('');
    return arr.map(m => {
        if(m === 'a') {
            return '1'
        } else if ( m === 'e') {
            return '1'
        }else if ( m === 'e') {
            return '1'
        } else if ( m === ' ') {
            return '1'
        }else if ( m === ',') {
            return '1'
        }else if ( typeof m === 'number') {
            return '1'
        } else if ( m === 'O') {
            return '0'
        } else if ( m === 'o') {
            return '1'
        }else if ( m === 'u') {
            return '1'
        } else if ( m === 'U') {
            return '1'
        } else if ( m === 'I') {
            return '1'
        }else if ( m === 'i') {
            return '1'
        } else {
            return '0'
        }
    }).join('')
}

console.log(vowelOne( "vowelOne"  ))
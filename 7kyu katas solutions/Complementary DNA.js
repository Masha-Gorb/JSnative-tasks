//лучшое решение
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
}

//мое
function DNAStrandMy(dna){
    return dna.split('').map(m => {
        if(m === 'A') {
            return m = 'T'
        } else if(m === 'C') {
            return m = 'G'
        } else if(m === 'T') {
            return m = 'A'
        } else if(m === 'G') {
            return m = 'C'
        }
    }).join('');
}

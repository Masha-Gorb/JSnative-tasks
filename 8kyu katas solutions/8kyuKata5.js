//8kyu task
function pillars(numPill, dist, width) {
    // your code here
    if (numPill === 1) {
        return 0
    } else {
        let result = ((dist*100)*(numPill-1)) + (width*(numPill-2))
        return result
    }
}
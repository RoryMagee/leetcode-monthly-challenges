/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length === 1 && citations[0] !== 0) return 1;
    citations.sort((a,b) => a - b);
    let h = 0;
    for(let x = citations.length-1; x >= 0; x--) {
        if (citations[x] >= (citations.length-1)-x+1) {
            h = (citations.length-1)-x+1;
        }
    }
    return h;
};

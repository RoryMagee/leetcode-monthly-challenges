/** * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let curr = 1;
    let currIndex = 0;
    let res = new Array(num_people).fill(0);
    while (curr <= candies) {
        res[currIndex] += curr;
        candies -= curr;
        curr++;
        currIndex === res.length-1 ? currIndex = 0 : currIndex++;
    }
    if (candies > 0) res[currIndex] += candies;
    return res;
};

/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function(candyType) {
    const uniqueCandies = new Set(candyType).size;
    const noOfCandies = candyType.length;
    const aliceCanEat = noOfCandies / 2;
    return Math.min(uniqueCandies, aliceCanEat);
};

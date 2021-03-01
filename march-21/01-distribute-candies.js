/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function(candyType) {
    const uniqueCandies = new Set(candyType).size;
    const noOfCandies = candyType.length;
    const aliceCanEat = noOfCandies / 2;
    let returnValue = aliceCanEat;
    if (uniqueCandies < returnValue) {
        returnValue = uniqueCandies;
    }
    return returnValue;
};

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = new Array(days.length + 1);
    dp[0] = 0;
    let week = 0;
    let month = 0;
    for (let i = 0; i < days.length; i++) {
        while (days[week] < days[i] - 6) {
            week++;
        }
        while (days[month] < days[i] - 29) {
            month++;
        }
        let min = Math.min(dp[i] + costs[0], dp[week] + costs[1]);
        dp[i + 1] = Math.min(min, dp[month]+costs[2]);
    }
    return dp[dp.length-1];
};

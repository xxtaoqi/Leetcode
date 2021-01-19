/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var max = 0
    for (let i = 0; i < prices.length; i++) {
        let profit = prices[i + 1] - prices[i]
        if (profit > 0) {
            max = max + profit
        }
    }
    return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end
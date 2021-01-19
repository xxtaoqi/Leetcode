/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let len = flowerbed.length
    for (var i = 0; i < len && n; i++) {
        if (flowerbed[i]) {
            continue
        }
        let pre = i == 0 ? 0 : flowerbed[i - 1];
        let next = i == len - 1 ? 0 : flowerbed[i + 1];
        if ( pre == 0 && next==0) {
            flowerbed[i]=1
            n--;
        }
    }
    return !n
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canPlaceFlowers;
// @after-stub-for-debug-end
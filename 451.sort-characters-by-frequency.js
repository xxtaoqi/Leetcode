/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    var map = new Map();
    var buckets = [], res = []

    //map 统计频率
    for (let i = 0; i < s.length; i++) {
        var num = map.get(s[i]) || 0
        map.set(s[i], num + 1)
    }
    //
    for (let [key, value] of map.entries()) {
        if (!buckets[value]) {
            buckets[value] = (new Array(value)).fill(key)
        }else{
            var bucketsArr = (new Array(value)).fill(key)
            buckets[value].push(...bucketsArr)
        }
    }
    //倒序输出
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i]) {
            res.push(...buckets[i])
        }

    }
    return res.join("")
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = frequencySort;
// @after-stub-for-debug-end
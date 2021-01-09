/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    //升序
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    //var res = 0, j = 0, i = 0; // 可直接使用i 来计数，不需要res
    var j = 0, i = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            //res++;
            i++
        } else if (s[j] < g[i] && j == s.length - 1) {
           //return res
           return i
        }
        j++;

    }
    //return res
    return i

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findContentChildren;
// @after-stub-for-debug-end
/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var rb = ~~ Math.sqrt(c);

    for( var la= 0 ; la<=rb; la++){
        for( ; la*la+rb*rb >= c && la<=rb;rb--){
            if( la*la+rb*rb == c){
                return true
            }
        }
    }
    return false
};
// @lc code=end


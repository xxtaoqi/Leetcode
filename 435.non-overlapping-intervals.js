/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    /* 两个区间间的关系分为三类：交叉、包含、相邻。
    该题如果从区间头思考，必然需要考虑3种情况；
        如果从区间尾思考，会发现3种情况每次都是选择  结尾最小的区间,
                        其次，选择区间尾，可以通过比较区间头的大小，缩小循环比较的时间 */

    /* 法一：常规思维，从区间头开始 */
    // var i = 0, j = 1, res = 0;
    // //按照区间头排序，升序
    // intervals.sort((a, b) => a[0] - b[0])
    // //循环
    // while (i < intervals.length && j < intervals.length) {

    //     if (intervals[i][1] <= intervals[j][0]) {//相邻 ，不用删除区间，i=j,j++
    //         i = j;
    //     } else if (intervals[i][1] >= intervals[j][1]) {//包含，删除一个区间，计数
    //         i = j;
    //         res++;
    //     } else if (intervals[i][1] < intervals[j][1] && intervals[i][1] > intervals[j][0]) {//相交，删除一个区间，计数
    //         res++;
    //     }

    //     j++;
    // }
    // return res

    /* 法二：从区间尾部开始*/

    if (!intervals.length) {
        return 0
    }
    //按照区间尾排序，升序b
    intervals.sort((a, b) => a[1] - b[1])

    var res = 1, 
        end = intervals[0][1]
    //循环找
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            continue
        }
        end = intervals[i][1];
        res++;
    }
    return intervals.length - res

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = eraseOverlapIntervals;
// @after-stub-for-debug-end
/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (!points.length) {
        return 0
    }
    // //区间头升序
    // points.sort((a,b) => a[0]-b[0])
    // var i= 1,num=0,init =points[0]
    // //循环找重叠区间
    // while(i < points.length){
    //     var pl =points[i][0], pr=points[i][1]
    //     if (pl<= init[1]) {
    //         if (pr<= init[1]  ) {
    //             init = [pl,pr]
    //         }else{
    //             init = [pl,init[1]]
    //         }
    //     }else {
    //         num++;
    //         init = points[i]
    //     }
    //     i++;
    // }
    // return num+1

    //区间头升序
    points.sort((a, b) => a[1] - b[1])
    var res = 1,
        end = points[0][1]
    //循环找重叠区间
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] <= end) {
            continue
        }
        end = points[i][1];
        res++;
    }
    return res 
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMinArrowShots;
// @after-stub-for-debug-end
/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    //按照身高降序，按个数K升序
    people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
    //检查
    for(let i =0 ;i<people.length;i++){
        if (i>people[i][1]) {
            //people[i]移到 now[1]位,i-now[1]间元素下移
            people.splice(people[i][1],0,people[i])
            people.splice(i+1,1)
        }
    }
    return people
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reconstructQueue;
// @after-stub-for-debug-end
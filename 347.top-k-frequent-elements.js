/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {numbervar[]}
 */
var topKFrequent = function(nums, k) {
    var topKFrequentMap = new Map();
    var buckets=[],topK=[]

    // map 统计频率
    nums.forEach(function (item, index, array) {
        //console.log(item, index);
        var num = topKFrequentMap.get(item) || 0;
        topKFrequentMap.set(item, num + 1);
    });
    
    // 装入桶
    for (let [key, value] of topKFrequentMap.entries()) {
        if (!buckets[value]) {
            buckets[value] = [key] // !!! 桶中元素 数组形式装入
        }else{
            buckets[value].push(key)
        }
    }
    //桶倒叙输出K个元素
    for (let i = buckets.length - 1; i >= 0 && topK.length < k; i--) {
        if (buckets[i]) {
            topK.push(...buckets[i]) // !!! 桶中数组元素解构
        }
    
    }
    return topK

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = topKFrequent;
// @after-stub-for-debug-end
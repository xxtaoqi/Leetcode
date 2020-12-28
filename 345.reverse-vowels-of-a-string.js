/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    var arr = [...s],i=0,j=arr.length-1;

    while(i < j){
        for(;i < j&& !set.has(arr[i]);i++){
            
        }
        for(;i < j&& !set.has(arr[j]) ; j--){
                
        }
       
       if(i < j && set.has(arr[i]) && set.has(arr[j])){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
       }
      
        
    }
    // while (i < j) {
    //     if (set.has(arr[i])) { // 左边是否有元音字母
    //         if (set.has(arr[j])) { // 如果左边有元音字母，右边也有，那么交换
    //             [arr[i], arr[j]] = [arr[j], arr[i]];
    //             i++;
    //         }
    //         j--;
    //     } else {
    //         i++;
    //     }
    // }
    
    return arr.join("")
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseVowels;
// @after-stub-for-debug-end
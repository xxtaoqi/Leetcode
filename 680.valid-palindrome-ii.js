/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let arr = [...s], i= 0,j= arr.length-1 ;
    let d =true
    while(i<j){
        if(arr[i] == arr[j]){
            i++,j--;
        }else if(d) {
            if(i == j-1){
                return true
            }else if(arr[i+1] == arr[j] && arr[i+2] == arr[j-1] ){
                d =false;                
                i++;
            }else if(arr[j-1] == arr[i] && arr[i+1] == arr[j-2] ){
                d =false;
                j--;
            }else{
                return false
            }
        }else{
            return false
        }
    }
    return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = validPalindrome;
// @after-stub-for-debug-end
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
function isPalindrome(str, l, r) {
    while (l < r) {
        if (str[l] !== str[r]) {
            return false
        } 
        l++;
        r--;
    }
    return true
}
var validPalindrome = function(s) {
   // let arr = [...s], 
            /* ps: 无需str 转为数组
                Sting 获取字符串的某个字符有两种方法。 
                1、是使用 charAt 方法：return 'cat'.charAt(1); // returns "a"
                2、 (在ECMAScript 5中有所介绍) 是把字符串当作一个类似数组的对象，其中的每个字符对应一个数值索引：return 'cat'[1]; // returns "a"
             */
    let i= 0,j= s.length-1 ;
    // let d =true
   /*  while(i<j){
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
    return true */
        /* ps ：拆解：回文判断 + 处理删除一个字符 */

    while(i<j){
        if(s[i] !== s[j]){
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1); //转为判断删掉一个字符后，是否回文
            /*  ！！！
                || : 替换标志符 d （只删除一次） 
            */
        }
        i++;
        j--;
    }
    return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = validPalindrome;
// @after-stub-for-debug-end
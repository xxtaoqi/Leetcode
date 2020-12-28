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
        var m =arr[i];
        arr[i]=arr[j];
        arr[j]=m;
        i++;
        j--;
       }
      
        
    }

    
    return arr.join("")
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseVowels;
// @after-stub-for-debug-end
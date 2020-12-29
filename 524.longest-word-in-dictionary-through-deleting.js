/*
 * @lc app=leetcode id=524 lang=javascript
 *
 * [524] Longest Word in Dictionary through Deleting
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    

    //按字符长度 降序排
    d.sort(function(first,second){
        if(second.length == first.length){ //长度相同时按字典顺序
            return first.localeCompare(second);
        }else{
            return second.length - first.length
        }
        
    })
    //
    
    for (var i = 0; d[i]; i++) {
        var strItem = d[i];
        var sI=0 , strI =0 ;

        while (strI < strItem.length && sI < s.length) {
            var v = s[sI], vv = strItem[strI];
            if (s[sI] == strItem[strI]) {
                strI++;
            }
            sI++;
        }
       
        if(strI==strItem.length){
            return strItem
        }

    }
    return ""
    
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findLongestWord;
// @after-stub-for-debug-end
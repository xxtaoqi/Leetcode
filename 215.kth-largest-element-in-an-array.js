/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/* 数组索引为 i 的节点，其：
        parent = Math.floor( (i-1)/ 2)
        left = 2i+1
        right = 2i+ 2
 */
let heapify = (arr, k, i) => {
    // eg.arr = [3,2,4,5] ,k =2,
    //自上而下式堆化 k 为数组元素数目， i 为 parent,堆顶索引

    while (true) {
        var parentIndex = i,
            left = 2 * i + 1,
            right = 2 * i + 2

        if (left <= k - 1 && arr[left] < arr[parentIndex]) { //左儿子
            parentIndex = left;
        }
        if (right <= k - 1 && arr[right] < arr[parentIndex]) { //右儿子
            parentIndex = right;
        }
        if (parentIndex !== i) {
            [arr[i], arr[parentIndex]] = [arr[parentIndex], arr[i]] //交换
            i = parentIndex
        } else {
            break
        }
    }
}

function buildMinHeap(arr, k) { //含有K个元素的数组arr
    if (k === 1) return
    // 最后一个非叶子节点 Math.floor( (k-1) / 2)
    let last_node = Math.floor((k - 1) / 2)
    for (let i = last_node; i >= 0; i--) {
        heapify(arr, k, i)
    }
}

var findKthLargest = function (nums, k) {
    var heapArr = [], i = 0;
    //  [3,2,1,5,6,4] 2 =》[6 5 4 3 2 1] 降序

    //1、先取数组nums前K个数
    while (i < k) {
        heapArr.push(nums[i]);
        i++;
    }

    //2、将前K个数，建立小顶堆
    buildMinHeap(heapArr, k);

    //3、堆顶元素为 当前 K个数里最小值
    //   将数组后面的元素 依次与 堆顶元素做比较
    //      小于堆顶元素，忽略
    //      大于堆顶元素，重新建堆
    //  =》元素比较结束，得到前K个大的元素 组成的小顶堆
    //  =》堆顶元素，即为第K大
    for (let i = k; i < nums.length; i++) {
        // var v=heapArr[0],vv=nums[i]
        if (heapArr[0] < nums[i]) {
            heapArr[0] = nums[i]
            heapify(heapArr, k, 0)
        }
    }

    return heapArr[0]
};



// @lc code=end


// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end
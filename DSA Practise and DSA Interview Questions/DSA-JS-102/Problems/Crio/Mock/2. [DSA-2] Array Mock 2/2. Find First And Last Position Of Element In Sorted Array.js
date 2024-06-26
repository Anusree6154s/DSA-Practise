// Problem Description
// Given an array of integers of length n sorted in ascending order and Q number of queries, for each query you have to find the first and last position (0-based indexed) of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Input format
// First line has an integer denoting the size of array (n)

// Second line contains n space separated integers denoting the array(nums).

// Third line contains an integer representing the value of Q.

// In the next Q lines, each line will contain an integer K (target value).

// Output format
// Two integers representing the first and last position of the target value from the corresponding query given in the input.

// Constraints
// 1 <= n <= 100000

// -1000000000 <= nums[i] <= 1000000000

// 1 <= Q <= 50000

// -1000000000 <= target <= 1000000000

// Sample Input 1
// 5

// 1 2 2 3 4

// 3

// 1

// 2

// 5

// Sample Output 1
// 0 0

// 1 2

// -1 -1

// Explanation 1
// The first and last occurrence of 1 is at index 0, so returning 0 0. The first and last occurrence of 2 are at index 1 and 2. The target 5 is not found in the array, so returning -1 -1.

function findFirstAndLastPositionOfElementInSortedArray(nums, target) {
    //tc=logn 
    //so binary search

    let left = 0
    let right = nums.length
    let start = -1
    let end = -1
    while (left <= right) {
        // in this case there are 4 condition-> less than target, more than, 
        //equal to target and mid-1 !=target (for start), equalt to target and mid+1!=target (for end)
        let mid = Math.floor((right + left) / 2)

        if (nums[mid] == target && nums[mid - 1] !== target) {
            start = mid
            left = mid + 1
        } else if (nums[mid] == target && nums[mid + 1] !== target) {
            end = mid
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return [start, end]
}

console.log(findFirstAndLastPositionOfElementInSortedArray([1, 2, 2, 3, 4], 2))


// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target number.
// The function twoSum2 should return the indices of the two numbers such that they add up to the target, where index1 must be less than index2.
// Note:
// 1. Your returned answers (both index1 and index2) are not zero-based.
// 2. You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

import { describe, expect, it } from "vitest"

function twoSum(nums: number[], target: number) {
  let index1 = 0
  let index2 = nums.length - 1

  while (nums[index1] + nums[index2] !== target) {
    if (nums[index1] + nums[index2] > target) {
      index2--
    } else {
      index1++
    }
  }
  
  return [index1 + 1, index2 + 1]
}

describe('twoSum', () => {
  it('should return the indices of the two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3])
    expect(twoSum([1, 3, 4, 5, 7, 10, 11], 9)).toEqual([3, 4])
  })
})
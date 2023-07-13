// Leetcode: 238. Product of Array Except Self
// Difficulty: Medium
// URL: https://leetcode.com/problems/product-of-array-except-self/

import { describe, expect, it } from 'vitest'

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productOfArrayExceptSelf(nums: number[]): number[] {
  const res: number[] = []
  res[0] = 1

  for (let i = 0; i < nums.length - 1; i++) {
    res[i + 1] = nums[i] * res[i]
  }

  let postFix = 1
  for (let i = nums.length - 1; i > 0; i--) {
    postFix *= nums[i]
    res[i - 1] *= postFix
  }

  return res
}

describe('productOfArrayExceptSelf', () => {
  it('returns an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]', () => {
    // console.log(productOfArrayExceptSelf([-1, 1, 0, -3, 3]))
    expect(productOfArrayExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
    expect(productOfArrayExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]) // <- fix this
  })
})
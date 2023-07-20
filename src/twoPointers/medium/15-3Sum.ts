// Leetcode: 15. 3Sum
// Difficulty: Medium
// URL: https://leetcode.com/problems/3sum/

import { describe, expect, it } from "vitest"

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.
// Note:
// The solution set must not contain duplicate triplets.
// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function threeSum(nums: number[]): number[][] {
  const res: number[][] = []
  nums.sort()

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break

    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1
    
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++
      } else {
        res.push([nums[i], nums[left], nums[right]])
        left++
        right--

        while (nums[i] === nums[i - 1] && left < right) {
          left++
        }
      }
    }
  }

  return res
}

describe('threeSum', () => {
  it('should return all unique triplets that sum to zero', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1]
    ])
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]])
    expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]])
    expect(threeSum([0, 1, 1])).toEqual([])
  })
})
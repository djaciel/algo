// Leetcode: 42. Trapping Rain Water
// Difficulty: Hard
// URL: https://leetcode.com/problems/trapping-rain-water/

import { describe, it, expect } from 'vitest'

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation:
// The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

function trap(height: number[]): number {
  let maxLeft = height[0]
  let maxRight = height[height.length - 1]
  let left = 1
  let right = height.length - 2
  let res = 0

  while (left <= right) {
    let amount = 0
    if (maxLeft <= maxRight) {
      amount = Math.min(maxLeft, maxRight) - height[left]
      maxLeft = Math.max(maxLeft, height[left])
      left++
    } else {
      amount = Math.min(maxLeft, maxRight) - height[right]
      maxRight = Math.max(maxRight, height[right])
      right--
    }

    if (amount > 0) {
      res += amount
    }
  }

  return res
}

describe('trap', () => {
  it('should return 6', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6)
  })
  it('should return 9', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9)
  })
  it('should return 0', () => {
    expect(trap([4, 2, 3])).toEqual(1)
  })
})

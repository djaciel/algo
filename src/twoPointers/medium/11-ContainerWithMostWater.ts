// Leetcode: 11. Container With Most Water
// Difficulty: Medium
// URL: https://leetcode.com/problems/container-with-most-water/

import { describe, expect, it } from 'vitest'

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.
// Note: You may not slant the container and n is at least 2.
// Example:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    let minNum = Math.min(height[left], height[right])
    maxArea = Math.max(maxArea, minNum * (right - left))

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}

describe('maxArea', () => {
  it('should return 49', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    expect(maxArea([1, 1])).toBe(1)
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16)
  })
})

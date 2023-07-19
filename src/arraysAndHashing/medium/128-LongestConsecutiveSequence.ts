// Leetcode: 128. Longest Consecutive Sequence
// Difficulty: Medium
// URL: https://leetcode.com/problems/longest-consecutive-sequence/

import { describe, it, expect } from 'vitest'

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

function longestConsecutive(nums: number[]): number {
  const hashSet = new Set(nums)
  let maxCount = 0

  for (let num of hashSet) {
    if (hashSet.has(num - 1)) continue

    let count = 0
    while (hashSet.has(num)) {
      count++
      num++
    }

    maxCount = Math.max(maxCount, count)
  }

  return maxCount
}

describe('longestConsecutive', () => {
  it('returns the length of the longest consecutive elements sequence', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4)
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9)
    expect(longestConsecutive([1, 2, 0, 1])).toEqual(3)
  })
})

// Leetcode: 217. Contains Duplicate
// Difficulty: Easy
// URL: https://leetcode.com/problems/contains-duplicate/

import { describe, expect, it } from "vitest"

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums: number[]): boolean {
  const hashSet = new Set()

  for (const num of nums) {
    if (hashSet.has(num)) {
      return true
    }
    hashSet.add(num)
  }

  return false
}

describe('containsDuplicate', () => {
  it('returns true if any value appears at least twice in the array', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
  })
  
  it('returns false if every element is distinct', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  })
})

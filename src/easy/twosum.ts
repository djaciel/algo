// given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
// you may assume that each input would have exactly one solution, and you may not use the same element twice
// e.g. given nums = [2, 7, 11, 15], target = 9
// e.g. given nums = [3, 2, 4], target = 6
//
// return [0, 1] because nums[0] + nums[1] == 9

import { describe, expect, it } from 'vitest'

function twoSum(nums: number[], target: number) {
  const map: { [number: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) return [map[target - nums[i]], i]
    map[nums[i]] = i
  }

  return []
}

describe('twoSum', () => {
  it('should return the indices of the two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
  it('should return an empty array if no two numbers add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 10)).toEqual([])
    expect(twoSum([3, 2, 4], 8)).toEqual([])
    expect(twoSum([3, 3], 7)).toEqual([])
  })
})

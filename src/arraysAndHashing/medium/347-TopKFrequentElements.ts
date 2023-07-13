// Leetcode: 347. Top K Frequent Elements
// Difficulty: Medium
// URL: https://leetcode.com/problems/top-k-frequent-elements/

import { describe, expect, it } from 'vitest'

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

function topKFrequentElements(nums: number[], k: number): number[] {
  const count: { [num: number]: number } = {}
  const arrCount: number[][] = new Array(nums.length + 1)
  let res: number[] = []

  for (const num of nums) {
    if (!count[num]) {
      count[num] = 1
    } else {
      count[num] += 1
    }
  }

  for (const num of Object.keys(count)) {
    if (!arrCount[count[num]]) {
      arrCount[count[num]] = [Number(num)]
    } else {
      arrCount[count[num]].push(Number(num))
    }
  }

  let i = arrCount.length
  while (k) {
    if (arrCount[i]) {
      res = [...res, ...arrCount[i]]
      k--
    }
    i--
  }

  return res
}

describe('topKFrequentElements', () => {
  it('returns the k most frequent elements', () => {
    expect(topKFrequentElements([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    expect(topKFrequentElements([1, 1, 1, 2, 2, 3], 1)).toEqual([1])
    expect(topKFrequentElements([1], 1)).toEqual([1])
  })
})

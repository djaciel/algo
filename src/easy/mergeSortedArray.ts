// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

import { describe, expect, it } from "vitest"

function mergeArrays(nums1: number[], nums2: number[], m: number, n: number) {
  let p1 = m - 1
  let p2 = n - 1
  let p = (m + n) - 1

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[p] = nums2[p2]
      p2--
    } else {
      nums1[p] = nums1[p1]
      p1--
    }
    p--
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }

  return nums1
}

describe('mergeArrays', () => {
  it('should merge two sorted arrays', () => {
    expect(mergeArrays([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3)).toEqual([1, 2, 2, 3, 5, 6])
  })
  it('should merge two sorted arrays', () => {
    expect(mergeArrays([2, 2, 3, 0, 0, 0], [1, 5, 6], 3, 3)).toEqual([1, 2, 2, 3, 5, 6])
  })
})
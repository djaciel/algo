// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// example: [-2,1,-3,4,-1,2,1,-5,4] => 6 (4,-1,2,1)

import { describe, expect, it } from "vitest";

function maximumSubarray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = 0;

  for (const num of nums) {
    if (currentSum < 0) {
      currentSum = 0
    }
    currentSum += num
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

describe("maximumSubarray", () => {
  it("should return 6", () => {
    expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  it("should return -1", () => {
    expect(maximumSubarray([-4,-1])).toBe(-1);
  });
});
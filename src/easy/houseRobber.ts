import { describe, expect, it } from "vitest"

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you
// from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses
// were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight
// without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.

function robber(houses: number[]) {
  let hr1 = 0
  let hr2 = 0

  for (const house of houses) {
    let temp = Math.max(house + hr1, hr2)
    hr1 = hr2
    hr2 = temp
  }

  return hr2
}

describe("House Robber", () => {
  it("should return the maximum amount of money that can be robbed", () => {
    expect(robber([1, 2, 3, 1])).toBe(4)
    expect(robber([2, 7, 9, 3, 1])).toBe(12)
  })
  it("should return 0 if there are no houses", () => {
    expect(robber([])).toBe(0)
  })
})
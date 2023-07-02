// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction
// (i.e., buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.

import { describe, expect, it } from "vitest"

// Note that you cannot sell a stock before you buy one.

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation:
//   Buy on day 2 (price = 1) and sell on day 5 (price = 6),
//   profit = 6-1 = 5.
//   Not 7-1 = 6, as selling price needs to be larger than buying price.

function maxProfit (prices: number[]): number {
  let buy = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const sell = prices[i]
    if (buy < sell) {
      const profit = sell - buy
      maxProfit = Math.max(maxProfit, profit)
    } else {
      buy = sell
    }
  }

  return maxProfit
}

describe('maxProfit', () => {
  it('should return the maximum profit', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
    expect(maxProfit([2, 4, 1])).toBe(2)
  })
})
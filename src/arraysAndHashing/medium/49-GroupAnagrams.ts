// Leetcode: 49. Group Anagrams
// Difficulty: Medium
// URL: https://leetcode.com/problems/group-anagrams/

import { describe, expect, it } from 'vitest'

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// this solution consider only chars from a ... z
function groupAnagrams(strs: string[]): string[][] {
  const result: { [key: string]: string[] } = {}

  for (const str of strs) {
    const count: number[] = new Array(26).fill(0)

    for (const char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }

    if (!result[count.toString()]) {
      result[count.toString()] = [str]
    } else {
      result[count.toString()].push(str)
    }
  }

  return Object.values(result)
}

describe('groupAnagrams', () => {
  it('groups the anagrams together', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ])
  })
})

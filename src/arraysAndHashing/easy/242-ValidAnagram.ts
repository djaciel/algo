// Leetcode: 242. Valid Anagram
// Difficulty: Easy
// URL: https://leetcode.com/problems/valid-anagram/

import { describe, expect, it } from 'vitest'

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false


function isAnagram(s:string, t:string) {
  if (s.length !== t.length) return false
  const sMap: {[letter: string]: number} = {}
  const tMap: {[letter: string]: number} = {}

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = sMap[s[i]] ? sMap[s[i]] + 1 : 1
    tMap[t[i]] = tMap[t[i]] ? tMap[t[i]] + 1 : 1
  }

  for (const letter in sMap) {
    if (sMap[letter] !== tMap[letter]) return false
  }

  return true
}

describe('isAnagram', () => {
  it('should return true for anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
    expect(isAnagram('rat', 'tar')).toBe(true)
  })
  it('should return false for non-anagrams', () => {
    expect(isAnagram('anagram', 'nagarams')).toBe(false)
    expect(isAnagram('rat', 'car')).toBe(false)
  })
})

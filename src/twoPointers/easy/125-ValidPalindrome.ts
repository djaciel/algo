// Leetcode: 125. Valid Palindrome
// Difficulty: Easy
// URL: https://leetcode.com/problems/valid-palindrome/

import { describe, it, expect } from 'vitest'

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

function isAlphanumeric(char: string) {
  const code = char.charCodeAt(0)
  return (
    (code >= 48 && code <= 57) || // Digits
    (code >= 65 && code <= 90) || // Uppercase letters
    (code >= 97 && code <= 122)
  ) // Lowercase letters
}

function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      while (left < right && !isAlphanumeric(s[left])) {
        left++
      }
    }
    if (!isAlphanumeric(s[right])) {
      while (right > left && !isAlphanumeric(s[right])) {
        right--
      }
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false

    left++
    right--
  }

  return true
}

describe('isPalindrome', () => {
  it('returns true if the string is a palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true)
    expect(isPalindrome(' ')).toEqual(true)
  })
  it('returns false if the string is not a palindrome', () => {
    expect(isPalindrome('race a car')).toEqual(false)
  })
})

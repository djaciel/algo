import { describe, expect, it } from 'vitest'

// given two strings s and t, return true if t is an anagram of s
// an anagram is a word formed by rearranging the letters of another word
// e.g. 'anagram' is an anagram of 'nagaram'
// e.g. 'rat' is not an anagram of 'car'

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

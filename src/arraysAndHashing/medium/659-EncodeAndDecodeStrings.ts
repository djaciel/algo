// Leetcode: 659. Encode and Decode Strings
// Difficulty: Medium
// URL: https://leetcode.com/problems/encode-and-decode-strings/

import { describe, expect, it } from 'vitest'

// Design an algorithm to encode a list of strings to a string.
// The encoded string is then sent over the network and is decoded back to the original list of strings.
// Please implement encode and decode methods.
// Example:
// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
// One possible encode method is: "lint:;code:;love:;you"

function encodeAndDecodeStrings(strs: string[]): string[] {
  const encode = (strs: string[]): string => {
    let res = ''
    for (const str of strs) {
      res += `${str.length}%${str}`
    }
    return res
  }

  const decode = (str: string): string[] => {
    console.log('decoding:', str)
    const res: string[] = []
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i])) && str[i + 1] === '%') {
        res.push(str.substring(i + 2, i + 2 + parseInt(str[i])))
      }
    }
    return res
  }

  return decode(encode(strs))
}

describe('encodeAndDecodeStrings', () => {
  it('encodes and decodes a list of strings', () => {
    expect(encodeAndDecodeStrings(['lint', 'code', 'love', 'you'])).toEqual([
      'lint',
      'code',
      'love',
      'you',
    ])
    expect(encodeAndDecodeStrings(['lint', 'code', 'love', 'you', ''])).toEqual([
      'lint',
      'code',
      'love',
      'you',
      '',
    ])
  })
})

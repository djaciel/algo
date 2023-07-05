// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
import { describe, expect, it } from 'vitest'

function validate(input: string): Boolean {
  const stack: string[] = []
  const parenthesesHashMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (const char of input) {
    if (Object.values(parenthesesHashMap).includes(char)) {
      stack.push(char)
    } else if (Object.keys(parenthesesHashMap).includes(char)) {
      if (!stack.length || stack[stack.length - 1] !== parenthesesHashMap[char]) {
        return false
      }
      stack.pop()
    }
  }
  
  return stack.length ? false : true
}

describe('validate', () => {
  it('should return the correct value', () => {
    expect(validate('()')).toBe(true)
    expect(validate('()[]{}')).toBe(true)
    expect(validate('((((([])))))')).toBe(true)
    expect(validate('([{}]]')).toBe(false)
    expect(validate('(()))')).toBe(false)
    expect(validate('{this[} is a (]string)')).toBe(false)
    expect(validate('[{this} is a (string)]')).toBe(true)
  })
})

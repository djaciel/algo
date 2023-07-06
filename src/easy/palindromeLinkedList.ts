// Given a singly linked list, determine if it is a palindrome.
// Example 1:
// Input: 1->2
// Output: false
// Example 2:
// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

import { describe, expect, it } from "vitest";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function isPalindrome(list: ListNode): boolean {
  let fastList: ListNode | null = list
  let slowList: ListNode | null = list

  // find middle (slowList)
  while (fastList && fastList.next) {
    fastList = fastList.next.next
    slowList = slowList.next
  }

  // reverse second half
  let prev: ListNode | null = null
  while (slowList) {
    let temp = slowList.next
    slowList.next = prev
    prev = slowList
    slowList = temp
  }

  // check palindrome
  let leftList: ListNode | null = list
  let rightList: ListNode | null = prev

  while (rightList) {
    if (leftList.val !== rightList.val) {
      return false
    }
    leftList = leftList.next
    rightList = rightList.next
  }
  return true
}

describe("Palindrome Linked List", () => {
  it("should return false", () => {
    const list = new ListNode(1)
    list.next = new ListNode(2)
    expect(isPalindrome(list)).toBe(false)
  })

  it("should return true", () => {
    const list = new ListNode(1)
    list.next = new ListNode(2)
    list.next.next = new ListNode(2)
    list.next.next.next = new ListNode(1)
    expect(isPalindrome(list)).toBe(true)
  })

  it("should return true", () => {
    const list = new ListNode(1)
    list.next = new ListNode(2)
    list.next.next = new ListNode(3)
    list.next.next.next = new ListNode(2)
    list.next.next.next.next = new ListNode(1)
    expect(isPalindrome(list)).toBe(true)
  })
})
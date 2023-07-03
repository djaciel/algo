// Reverse a singly linked list.
// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

import { describe, expect, it } from "vitest";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function reverseIteratively(list: ListNode): ListNode {
  let prev = new ListNode(0)
  let curr: ListNode | null = list

  while (curr) {
    const temp: ListNode | null = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
}

function reverseRecursively(list: ListNode): ListNode | null {
  if(!list)
    return null

  let newHead: ListNode | null  = list
  if (list.next) {
    newHead = reverseRecursively(list.next)
    list.next.next = list
  }
  list.next = null

  return newHead
}

describe("reverse linked list", () => {
  it("should reverse a linked list iteratively", () => {
    const list = new ListNode(1)
    list.next = new ListNode(2)
    list.next.next = new ListNode(3)
    list.next.next.next = new ListNode(4)
    list.next.next.next.next = new ListNode(5)

    const reversed = reverseIteratively(list)

    expect(reversed.val).toBe(5)
    expect(reversed?.next?.val).toBe(4)
    expect(reversed?.next?.next?.val).toBe(3)
    expect(reversed?.next?.next?.next?.val).toBe(2)
    expect(reversed?.next?.next?.next?.next?.val).toBe(1)
  })

  it("should reverse a linked list recursively", () => {
    const list = new ListNode(1)
    list.next = new ListNode(2)
    list.next.next = new ListNode(3)
    list.next.next.next = new ListNode(4)
    list.next.next.next.next = new ListNode(5)

    const reversed = reverseRecursively(list)

    expect(reversed?.val).toBe(5)
    expect(reversed?.next?.val).toBe(4)
    expect(reversed?.next?.next?.val).toBe(3)
    expect(reversed?.next?.next?.next?.val).toBe(2)
    expect(reversed?.next?.next?.next?.next?.val).toBe(1)
  })
})

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

import { describe, expect, it } from "vitest";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function mergeTwoSortedLists (list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0)
  let tail = dummy

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1
      list1 = list1.next
    } else {
      tail.next = list2
      list2 = list2.next
    }
    tail = tail.next
  }

  if (list1) {
    tail.next = list1
  } else if (list2) {
    tail.next = list2
  }

  return dummy.next
}

describe('mergeTwoSortedLists', () => {
  it('should merge two sorted lists', () => {
    const list1 = new ListNode(1)
    list1.next = new ListNode(2)
    list1.next.next = new ListNode(4)

    const list2 = new ListNode(1)
    list2.next = new ListNode(3)
    list2.next.next = new ListNode(4)

    const result = mergeTwoSortedLists(list1, list2)

    expect(result?.val).toBe(1)
    expect(result?.next?.val).toBe(1)
    expect(result?.next?.next?.val).toBe(2)
    expect(result?.next?.next?.next?.val).toBe(3)
    expect(result?.next?.next?.next?.next?.val).toBe(4)
    expect(result?.next?.next?.next?.next?.next?.val).toBe(4)
  })

  it('should merge two sorted lists', () => {
    const list1 = new ListNode(3)
    list1.next = new ListNode(4)
    list1.next.next = new ListNode(5)

    const list2 = new ListNode(1)
    list2.next = new ListNode(2)
    list2.next.next = new ListNode(4)
    list2.next.next.next = new ListNode(6)
    list2.next.next.next.next = new ListNode(7)

    const result = mergeTwoSortedLists(list1, list2)

    expect(result?.val).toBe(1)
    expect(result?.next?.val).toBe(2)
    expect(result?.next?.next?.val).toBe(3)
    expect(result?.next?.next?.next?.val).toBe(4)
    expect(result?.next?.next?.next?.next?.val).toBe(4)
    expect(result?.next?.next?.next?.next?.next?.val).toBe(5)
    expect(result?.next?.next?.next?.next?.next?.next?.val).toBe(6)
    expect(result?.next?.next?.next?.next?.next?.next?.next?.val).toBe(7)
  })
})
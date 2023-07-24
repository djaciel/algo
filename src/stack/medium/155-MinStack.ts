// Leetcode: 155. Min Stack
// Difficulty: Medium
// URL: https://leetcode.com/problems/min-stack/

import { describe, it, expect } from "vitest";

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// - MinStack() initializes the stack object.
// - void push(val) pushes the element val onto the stack.
// - void pop() removes the element on the top of the stack.
// - int top() gets the top element of the stack.
// - int getMin() retrieves the minimum element in the stack.
// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// Output
// [null,null,null,null,-3,null,0,-2]
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

class MinStack {
  private stack: number[] = [];
  private minNumStack: number[] = [];

  public push(num: number) {
    this.stack.push(num)
    if (!this.minNumStack.length || this.minNumStack[this.minNumStack.length - 1] > num) {
      this.minNumStack.push(num)
    } else {
      this.minNumStack.push(this.minNumStack[this.minNumStack.length - 1])
    }
  }

  public pop() {
    this.stack.pop()
    this.minNumStack.pop()
  }

  public top() {
    return this.stack[this.stack.length - 1]
  }

  public getMin() {
    return this.minNumStack[this.minNumStack.length - 1]
  }
}

describe("MinStack", () => {
  it("should work", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });
});

// Leetcode: 36. Valid Sudoku
// Difficulty: Medium
// URL: https://leetcode.com/problems/valid-sudoku/

import { describe, it, expect } from 'vitest'

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// - Only the filled cells need to be validated according to the mentioned rules.
// Example 1:
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

function isValidSudoku(board: string[][]): boolean {
  const hashSetRows = new Set<string>()
  const hashMap: { [key: string]: Set<string> } = {}

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const num = board[i][j];
      if (!num) continue

      // verify rows
      if (hashSetRows.has(num)) return false
      hashSetRows.add(num)

      // verify cols
      if (!hashMap[j]) {
        hashMap[j] = new Set<string>([num])
      } else {
        if (hashMap[j].has(num)) return false
        hashMap[j].add(num)
      }

      // verify groups
      console.log(i,j)
      const group = `${i/3}${j/3}`
      if (!hashMap[group]) {
        hashMap[group] = new Set<string>([num])
      } else {
        if (hashMap[group].has(num)) return false
        hashMap[group].add(num)
      }
    }

    hashSetRows.clear()
  }

  return true
}

describe('isValidSudoku', () => {
  it('isValidSudoku returns true', () => {
    expect(
      isValidSudoku([
        ['5', '3', '', '', '7', '', '', '', ''],
        ['6', '', '', '1', '9', '5', '', '', ''],
        ['', '9', '8', '', '', '', '', '6', ''],
        ['8', '', '', '', '6', '', '', '', '3'],
        ['4', '', '', '8', '', '3', '', '', '1'],
        ['7', '', '', '', '2', '', '', '', '6'],
        ['', '6', '', '', '', '', '2', '8', ''],
        ['', '', '', '4', '1', '9', '', '', '5'],
        ['', '', '', '', '8', '', '', '7', '9'],
      ])
    ).toEqual(true)
  })
  it('isValidSudoku returns false', () => {
    expect(
      isValidSudoku([
        ['8', '3', '', '', '7', '', '', '', ''],
        ['6', '', '', '1', '9', '5', '', '', ''],
        ['', '9', '8', '', '', '', '', '6', ''],
        ['8', '', '', '', '6', '', '', '', '3'],
        ['4', '', '', '8', '', '3', '', '', '1'],
        ['7', '', '', '', '2', '', '', '', '6'],
        ['', '6', '', '', '', '', '2', '8', ''],
        ['', '', '', '4', '1', '9', '', '', '5'],
        ['', '', '', '', '8', '', '', '7', '9'],
      ])
    ).toEqual(false)
  })
})

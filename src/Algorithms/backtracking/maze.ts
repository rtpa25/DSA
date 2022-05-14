/** @format */

const returnNumberOfPathsInMaze = (r: number, c: number): number => {
  //*when we reach the extreme left or extreme down there is just only one possible path which in this case is the base case
  if (r === 1 || c === 1) {
    return 1;
  }
  //?maze man can only move right and down
  let left = returnNumberOfPathsInMaze(r - 1, c); //either go down
  let right = returnNumberOfPathsInMaze(r, c - 1); //or go right

  return left + right;
};

const returnAllPossiblePathsInMaze = (r: number, c: number) => {
  let paths: string[] = [];
  //*D-->down, R-->right
  const helper = (p: string, row: number, column: number) => {
    if (row === 1 && column === 1) {
      paths.push(p);
      return;
    }
    if (row > 1) {
      helper(p + 'D', row - 1, column);
    }
    if (column > 1) {
      helper(p + 'R', row, column - 1);
    }
  };
  helper('', r, c);
  return paths;
};

const DiagonalMovementEnabled = (r: number, c: number) => {
  let paths: string[] = [];
  //*D-->down, R-->right, d-->diagonal
  const helper = (p: string, row: number, column: number) => {
    if (row === 1 && column === 1) {
      paths.push(p);
      return;
    }
    if (row > 1 && column > 1) {
      helper(p + 'd', row - 1, column - 1);
    }
    if (row > 1) {
      helper(p + 'D', row - 1, column);
    }
    if (column > 1) {
      helper(p + 'R', row, column - 1);
    }
  };
  helper('', r, c);
  return paths;
};

const ObstructedMazeStartingFrom00 = (
  maze: boolean[][],
  r: number,
  c: number
) => {
  let paths: string[] = [];
  //*D-->down, R-->right, d-->diagonal
  const helper = (p: string, row: number, column: number) => {
    //base case when maze man is in the last row and last column
    if (row === maze.length - 1 && column === maze[0].length - 1) {
      paths.push(p);
      return;
    }
    //river
    if (!maze[row][column]) {
      return;
    }
    //if row < base case
    if (row < maze.length - 1) {
      helper(p + 'D', row + 1, column);
    }
    //if column < base case
    if (column < maze[0].length - 1) {
      helper(p + 'R', row, column + 1);
    }
  };
  helper('', r, c);
  return paths;
};

//!THIS IS WRONG GIVES STACK OVERFLOW because you will move in a circle start from 00 go to 01 then again go to 00 so it is impossible to reach the destination. Hence recursion is never ending
const AllowedMovementInAllDirections = (
  maze: boolean[][],
  r: number,
  c: number
) => {
  let paths: string[] = [];
  //*D-->down, R-->right, d-->diagonal
  const helper = (p: string, row: number, column: number) => {
    //base case when maze man is in the last row and last column
    if (row === maze.length - 1 && column === maze[0].length - 1) {
      paths.push(p);
      return;
    }
    //river
    if (!maze[row][column]) {
      return;
    }
    //if row < base case
    if (row < maze.length - 1) {
      helper(p + 'D', row + 1, column);
    }
    //if column < base case
    if (column < maze[0].length - 1) {
      helper(p + 'R', row, column + 1);
    }

    //if row > 0 then up movement is allowed
    if (row > 0) {
      helper(p + 'U', row - 1, column);
    }

    //if column is greater than 0 then left movement is allowed
    if (column > 0) {
      helper(p + 'L', row, column - 1);
    }
  };
  helper('', r, c);
  return paths;
};

console.log(
  AllowedMovementInAllDirections(
    [
      [true, true, true],
      [true, false, true],
      [true, true, true],
    ],
    0,
    0
  )
);

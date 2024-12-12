import fs from 'fs';
const input = fs.readFileSync('./input', 'utf8').split('\n').map(line => line.split(''));

let result = 0;

const directions = [
  [0, 1], // Right
  [0, -1], // Left
  [1, 0], // Down
  [-1, 0], // Up
  [1, 1], // Down-Right
  [1, -1], // Down-Left
  [-1, 1], // Up-Right
  [-1, -1], // Up-Left
];

const checkDirection = (rowInd, colInd, rowDelta, colDelta) => {
  for (let i = 0; i < 'XMAS'.length; i++) {
    const checkRow = rowInd + i * rowDelta;
    const checkCol = colInd + i * colDelta;

    if (checkRow < 0 || checkRow >= input.length || checkCol < 0 || checkCol >= input[0].length) return false;
    if (input[checkRow][checkCol] !== 'XMAS'[i]) return false;
  }
  return true;
};

input.forEach((row, rowInd) => {
  row.forEach((col, colInd) => {
    if (col === 'X') {
      directions.forEach(([rowDelta, colDelta]) => {
        if (checkDirection(rowInd, colInd, rowDelta, colDelta)) result++;
      });
    }
  });
});

console.log(result);

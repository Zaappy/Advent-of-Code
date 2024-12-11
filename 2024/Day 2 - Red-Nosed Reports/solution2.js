import fs from 'fs';
const input = fs.readFileSync('./input', 'utf8').split('\n');

let result = 0;

input.forEach(rep => {
  const levels = rep.split(' ').map(lvl => Number(lvl));
  const ascending = levels.toSorted((a, b) => a - b);
  const descending = levels.toSorted((a, b) => a - b).toReversed();
  let fullSafe = false;

  const checkRate = (arr, lvl, lvlInd) => {
    if (Math.abs(lvl - arr[lvlInd + 1]) <= 3 && Math.abs(lvl - arr[lvlInd + 1]) !== 0) return true;
    else return false;
  };

  if (levels.toString() === ascending.toString() || levels.toString() === descending.toString()) {
    if (levels.slice(0, -1).every((lvl, lvlInd) => checkRate(levels, lvl, lvlInd))) fullSafe = true;
  }

  if (fullSafe) {
    result++;
  }
  else {
    for (let i = 0; i < levels.length; i++) {
      /**
       * @type {Array<Number>}
       */
      const modArr = levels.toSpliced(i, 1);
      const modAsc = modArr.toSorted((a, b) => a - b);
      const modDesc = modArr.toSorted((a, b) => a - b).toReversed();

      if (modArr.toString() === modAsc.toString() || modArr.toString() === modDesc.toString()) {
        if (modArr.slice(0, -1).every((lvl, lvlInd) => checkRate(modArr, lvl, lvlInd))) {
          result++;
          break;
        }
      }
    }
  }
});

console.log(result);

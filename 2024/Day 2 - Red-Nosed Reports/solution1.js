import fs from 'fs';
const input = fs.readFileSync('./input', 'utf8').split('\n');

let result = 0;

input.forEach(rep => {
  const levels = rep.split(' ').map(lvl => Number(lvl));
  const levelsAsc = levels.toSorted((a, b) => a - b);
  const levelsDesc = levels.toSorted((a, b) => a - b).reverse();

  // if the levels are all increasing or all decreasing, levels should === sortedAsc/sortedDesc
  if (levels.toString() === levelsAsc.toString() || levels.toString() === levelsDesc.toString()) {
    // if rate of change for all is <= 3 and not 0, mark as safe
    const checkRate = (lvl, lvlInd) => {
      if (Math.abs(lvl - levels[lvlInd + 1]) <= 3 && Math.abs(lvl - levels[lvlInd + 1]) !== 0) return true;
      else return false;
    };
    if (levels.slice(0, -1).every((lvl, lvlInd) => checkRate(lvl, lvlInd))) result++;
  }
});

console.log(result);

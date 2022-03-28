export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = maxCoins(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
var maxCoins = function(piles) {
  const len = piles.length;
  if (len < 2) return 0;
  if (len === 2) return Math.min(...piles);

  const sorted = piles.sort((a,b) => a - b)
  let coins = 0;
  for (let i = len - 2; i >= len / 3; i -= 2) {
    coins += sorted[i];
  }
  return coins;
};

const input = [
  [2,4,1,2,7,8],
  [2,4,5],
  [9,8,7,6,5,1,2,3,4],
]
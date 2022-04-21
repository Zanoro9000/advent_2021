export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = integerBreak(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/integer-break/
/* 
  okay so distilling numbers
  1 -> 1
  2 -> 2
  3 -> 3
  4 -> 4 -> 2, 2
  5 -> 2, 3
  6 -> 3, 3
  7 -> 3, 4 -> 3, 2, 2
  8 -> 3, 3, 2
  9 -> 3, 3, 3
  10 -> 3, 3, 4 -> 3, 3, 2, 2
  this means that all numbers flow to as many 3's as possible, with a 4 (2x2) at the end if space for it
*/
var integerBreak = function(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;

  const div = Math.floor(n / 3);
  const remainder = n % 3;

  if (remainder === 1 && div > 0)  return Math.pow(3, div - 1) * 4;
  return Math.pow(3, div) * (remainder || 1)
};

const input = [
  2,
  3,
  4,  
  10,
  12,
  15,
]
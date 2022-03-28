export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = getRow(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

// https://leetcode.com/problems/pascals-triangle-ii/
// N choose K
var getRow = function(n) {
  let arr = Array.apply(1, Array(n + 1))
  for (let k = 0; k <= n / 2; k++) {
    let val = getFactorial(n) / (getFactorial(k) * getFactorial(n - k))
    arr[k] = val
    arr[n - k] = val;
  }
  return arr;
};

const factorials = [1, 1, 2, 6];

const getFactorial = (v) => {
  if (v < 0) return -1;
  if (v === 0) return 1;
  if (v < factorials.length) return factorials[v];
  let child = getFactorial(v - 1)
  factorials.push(v * child);
  return v * child;
}

const input = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]
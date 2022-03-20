export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    console.log(findOriginalArray(inp))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/find-original-array-from-doubled-array/
var findOriginalArray = function(changed) {
  const len = changed.length;
  if (len % 2 !== 0) return [];
  
  const out = [];

  // map arr to unique keys and count of each
  const obj = {}  
  changed.forEach((c) => { obj[c] = (obj[c] ?? 0) + 1 })

  // remove 0's since unique and must match self
  const countZero = obj[0] ?? 0;
  if (countZero > 0) {
    if (countZero % 2 !== 0) return [];
    Array.from(Array(countZero / 2)).forEach(() => out.push(0))
    delete obj[0];
  }

  
  // sort keys and go in increasing order
  const keys = [...new Set(changed)].sort((a,b) => a - b )
  for(let k of keys) {
    const count = obj[k] ?? 0
    if (count === 0) continue;

    const maxCount = obj[k * 2] ?? 0
    if (count > maxCount) return [];
    
    Array.from(Array(count)).forEach(() => out.push(k))

    if (count === maxCount) {
      delete obj[k * 2];
    } else obj[k * 2] -= count;

    delete obj[k];
  }
  
  return out;
};

const input = [
  [1, 3],
  [0,0,0,0],
  [1,3,4,2,6,8],
  [1,2,3,2,4,6,2,4,6,4,8,12],
  [6,3,0,1],
  [1],
  [4,45,0,46,14,12,8,90,36,28,88,46,10,26,16,0,13,0,18,70,38,14,36,56,4,0,26,23,28,22,4,3,58,58,74,23,88,32,40,12,32,36,72,28,72,52,28,31,20,35,16,7,22,29,2,0,52,44,32,16,5,78,0,32,10,56,29,33,26,7,44,80,14,15,37,11,64,2,18,22,2,19,66,11,23,36,24,39,46,26,28,6,4,62,14,30,52,6,44,14],
]
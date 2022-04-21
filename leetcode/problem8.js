export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = isPowerOfFour(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/power-of-four/
var isPowerOfFour = function(n) {
  // if right 2 bits are nonzero - false
  // e.g. 0101011 (11 must be 00 so its even and not)
  if (n === 1) return true;
  if (n < 3 || n & 3 !== 0) return false;
  let val = n.toString(2);
  let split = val.split('1')
  let count = split.length - 1
  if (count > 1) return false;
  return (split[1].length % 2) === 0;
};

const input = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,64,65
]
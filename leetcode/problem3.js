export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    console.log(maximumDifference(inp))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/find-original-array-from-doubled-array/

// optimal solution
var maximumDifference = function(nums) {
  let diff = -1;
  let minI = 0;

  for (let i = 1; i < nums.length; i++) {    
    if (nums[minI] < nums[i]) diff = Math.max(diff, nums[i] - nums[minI]);
    else minI = i;
  }
  
  return diff;
};

// my solution
// var maximumDifference = function(nums) {
//   let minimums = [0] // first element can only be a minimum
//   let maximums = []

//   let last = nums[0]
//   let lastDn = 0;
//   // when derivative crosses 0, there is a local min/max
//   for (let i = 1; i < nums.length; i++) {    
//     const dn = nums[i] - last;
//     // local max
//     if (dn >= 0 && lastDn <= 0) maximums.push(i)
//     // continuing max (for repeating at end)
//     if (dn >= 0 && lastDn >= 0 && maximums.length > 0) maximums[maximums.length - 1] = i
//     // local min
//     if (dn <= 0 && lastDn >= 0) minimums.push(i)
//     // continuing min (for repeating at beginning)
//     if (dn <= 0 && lastDn <= 0 && minimums.length > 0) minimums[minimums.length - 1] = i
//     last = nums[i];
//     lastDn = dn;
//   }

//   let diff = -1;
  
//   // find maximum difference
//   minimums.forEach(minI => {
//     let min = nums[minI]
//     maximums.forEach(maxI => {
//       if (minI > maxI) return;
//       const newDiff = nums[maxI] - min;
//       if (newDiff > 0 && newDiff > diff) diff = newDiff;
//     })
//   })
  
//   return diff;
// };

const input = [
  [1, 3],
  [7,1,5,4],
  [9,4,3,2],
  [1,5,2,10],
  [0,0,0,0],
  [1,3,4,2,6,8],
  [1,2,3,2,4,6,2,4,6,4,8,12],
  [6,3,0,1],
  [1],
  [4,45,0,46,14,12,8,90,36,28,88,46,10,26,16,0,13,0,18,70,38,14,36,56,4,0,26,23,28,22,4,3,58,58,74,23,88,32,40,12,32,36,72,28,72,52,28,31,20,35,16,7,22,29,2,0,52,44,32,16,5,78,0,32,10,56,29,33,26,7,44,80,14,15,37,11,64,2,18,22,2,19,66,11,23,36,24,39,46,26,28,6,4,62,14,30,52,6,44,14],
  [12, 0, 5, 1, 10],
  [0, 5, 1, 10],
  [0, 5, 10],
  [0, 5, 10, 20],
  [0, 5, 10, 20, 10],
]
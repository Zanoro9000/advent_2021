export function problem(){
  console.log(mctFromLeafValues(input))
}

//https://leetcode.com/problems/minimum-cost-tree-from-leaf-values
var mctFromLeafValues = function(arr) {
  const len = arr.length;

  if (len === 1) return 0;
  if (len === 2) return arr[0] * arr[1];

  const parents = getParents(arr);
  let minIndex = 0;
  let min = parents.reduce((agg, p, i) => {
      if (p < agg) {
          minIndex = i;
          return p;
      }
      return agg;
  }, parents[0])
  
  const newArr = [...arr]
  newArr.splice(minIndex, 2, Math.max(arr[minIndex], arr[minIndex + 1]))

  return min + mctFromLeafValues(newArr)
};

const getParents = (arr) => {
  const parents = Array.apply(0, Array(arr.length - 1));
  
  for (let i = 0; i < arr.length - 1; i++) {
      parents[i] = arr[i] * arr[i+1];
  }
  
  return parents;
}

const input = [6, 2, 4, 5]

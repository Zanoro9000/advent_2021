export function problem(){
  console.log(mctFromLeafValues(input))
}

//https://leetcode.com/problems/minimum-cost-tree-from-leaf-values
var mctFromLeafValues = function(orig) {
  const len = orig.length;
  const arr = [...orig]

  if (len === 1) return 0;
  if (len === 2) return arr[0] * arr[1];

  let total = 0;
  while (arr.length > 1) {
      const minIndex = getMinIndex(arr);
      if (minIndex === 0) {
          total += arr[0] * arr[1]
          arr.splice(0, 2, Math.max(arr[0], arr[1]))
      } else if (minIndex === arr.length - 1) {
          total += arr[minIndex - 1] * arr[minIndex]
          arr.splice(minIndex - 1, 2, Math.max(arr[minIndex - 1], arr[minIndex]))
      } else {
          if (arr[minIndex - 1] < arr[minIndex + 1]) {
            total += arr[minIndex] * arr[minIndex - 1]
            arr.splice(minIndex - 1, 2, Math.max(arr[minIndex], arr[minIndex - 1]))
          } else {
            total += arr[minIndex] * arr[minIndex + 1]
            arr.splice(minIndex, 2, Math.max(arr[minIndex], arr[minIndex + 1]))
          }          
      }
  }
    

  return total
};

const getMinIndex = (arr) => {
    let minIndex = 0;
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }
    return minIndex;    
}

const input = [6, 2, 4, 5]

export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = maxPoints(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/max-points-on-a-line/
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 2) return points.length;

  let lines = {};
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let line = getLine(points[i], points[j])
      lines[line] = (lines[line] ?? 0) + 1
    }
  }

  const max = Math.max(...Object.values(lines))
  // this is a triangle number due to adding all segments, so we need to reverse
  // (n^2 + n) / 2 = y
  // goes to
  // (n + .5)^2 = 2y + .25
  return (Math.pow((max * 2) + .25, .5) - .5) + 1;
};

/**
 * @param {number[]} point1
 * @param {number[]} point2
 * @return {string}
 */
function getLine([x1, y1], [x2, y2]) {
  let m = (y2 - y1) / (x2 - x1)
  if (!isFinite(m)) return `${Math.abs(m)}_${x1}`
  return `${m.toFixed(12)}_${(y1 - m * x1).toFixed(12)}`
}

/* orig solution
var maxPoints = function(points) {
  if (points.length === 1) return 1;

  let lines = {};
  for (let i = 0; i < points.length; i++) {
    let myLines = new Set();
    for (let j = 0; j < points.length; j++) {
      if (j === i) continue;
      let line = getLine(points[i], points[j])
      if (!myLines.has(line)) {
        myLines.add(line)
        lines[line] = (lines[line] ?? 0) + 1
      }
    }
  }

  return Math.max(...Object.values(lines))
};


// @param {number[]} point1
// @param {number[]} point2
// @return {string}

 function getLine([x1, y1], [x2, y2]) {
  let m = (y2 - y1) / (x2 - x1)
  if (!isFinite(m)) return `${Math.abs(m).toFixed(10)}_${x1.toFixed(10)}`
  return `${m.toFixed(10)}_${(y1 - m * x1).toFixed(10)}`
}
*/

const input = [
  [[5151,5150],[0,0],[5152,5151]], // 2
  [[0,1],[0,0]], // 2
  [[3,3],[1,4],[1,1],[2,1],[2,2]], // 2
  [[-6,-1],[3,1],[12,3]], // 
  [[1,1], [2,2], [3,3]],
  [[1,1], [3,2], [5,3], [4,1], [2,3], [1,4]],
  [[1,1], [3,2], [5,3], [4,1], [2,3], [1,4], [5,0]],
  [[1,1], [3,2], [5,3], [4,1], [2,3], [1,4], [-1,0], [-3,-1]],
]
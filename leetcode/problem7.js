export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = dayOfTheWeek(...inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/day-of-the-week
var dayOfTheWeek = function(day, month, year) {
  const date = new Date(year, month - 1, day, 0, 0, 0, 0)
  const dow = date.getDay()  
    switch (dow) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
    }
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
  [31, 8, 2019]
]
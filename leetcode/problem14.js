export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = reverseWords(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/evaluate-reverse-polish-notation/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let strings = s.split(' ')
  return strings.filter(s => s && s !== ' ').reverse().join(' ');  
};

const input = [
  "the sky is blue",
  "  hello world  ",
  "a good   example",
]
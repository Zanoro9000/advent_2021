export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = evalRPN(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/evaluate-reverse-polish-notation/
/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let buffer = [];
    for (let i = 0; i < tokens.length; i++) {
      let val = parseInt(tokens[i]);
      if (!isNaN(val)) {
        buffer.push(val);
        continue;
      }

      let op = buffer.pop()
      const len = buffer.length - 1;
      switch(tokens[i]) {
        case '+': 
          buffer[len] = buffer[len] + op;
          break;
        case '-':
          buffer[len] = buffer[len] - op;
          break;
        case '*':
          buffer[len] = buffer[len] * op;
          break;
        case '/':
          let newVal = buffer[len] / op
          buffer[len] = newVal > 0 ? Math.floor(newVal) : Math.ceil(newVal);
          break;
      }
    }

    return buffer[0];
};

const input = [
  ["2","1","+","3","*"],
  ["4","13","5","/","+"],
  ["10","6","9","3","+","-11","*","/","*","17","+","5","+"],
]
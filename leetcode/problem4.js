export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = levelOrder(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/n-ary-tree-level-order-traversal/
var levelOrder = function(root) {
  if (!root) return []
  let arr = []  
  traverse([root], arr);
  return arr;
};

var traverse = function(nodes, arr) {
  if (!nodes || nodes.length === 0) return [];
  arr.push(nodes.map(n => n.val))
  let childArr = nodes.flatMap(n => n.children ?? []) 
  traverse(childArr, arr)  
}

const input = [
  { val: 1, 
    children: [
      { val: 3, 
        children: [
          { val: 5 }, 
          { val: 6 }
        ]}, 
      { val: 2 }, 
      { val: 4 }
    ] 
  },
  { val: 1, 
    children: [
      { val: 2 }, 
      { val: 3, 
        children: [
          { val: 6 }, 
          { 
            val: 7,
            children: [
              { 
                val: 11,
                children: [
                  { val: 14 }
                ]                
              }
            ]
          }
        ]
      }, 
      { 
        val: 4,
        children: [
          { 
            val: 8,
            children: [
              { val: 12 }
            ]
          }
        ]
      },
      { 
        val: 5,
        children: [
          { 
            val: 9,
            children: [
              { val: 13 }
            ]
          },
          { val: 10 }
        ]
      }
    ] 
  }
]
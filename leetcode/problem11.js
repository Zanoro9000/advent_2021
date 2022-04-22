export function problem(){
  input.forEach(inp => {
    console.log(inp)
    console.log(' -> ')
    let val = insertionSortList(inp)
    console.log(JSON.stringify(val))
    console.log('----------------')
  })
  
}

//https://leetcode.com/problems/insertion-sort-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var insertionSortList = function(head) {
  let out = new ListNode(head.val)
  let mainCursor = head.next;
  while (mainCursor) {
    let current = new ListNode(mainCursor.val)
    let outPrev = null;
    let outCursor = out;
    while (outCursor) {
      if (current.val <= outCursor.val) {
        if (!outPrev) {
          current.next = out;
          out = current;
        } else {
          const temp = outPrev.next;
          outPrev.next = current;
          current.next = temp;
        }
        break;
      } else if (!outCursor.next){
        outCursor.next = current;
        break;
      }
      outPrev = outCursor
      outCursor = outCursor.next
    }

    mainCursor = mainCursor.next;
  }
  return out;
};

const input = [
  { 
    val: -1, 
    next: {
      val: 5,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 0
          }
        }
      }
    }
  },
  { 
    val: -1, 
    next: {
      val: -2,
      next: {
        val: -3,
        next: {
          val: -4,
          next: {
            val: 0
          }
        }
      }
    }
  }
]
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
 var insertionSortList = function(head) {
    
};

const input = [
  2,
  3,
  4,  
  10,
  12,
  15,
]
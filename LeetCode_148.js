function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let arr = [];
  let cur = head;
  while (cur !== null) {
    arr.push(cur);
    cur = cur.next;
  }
  arr.sort((a, b) => a.val - b.val);
  let temp = new ListNode();
  let curNode = null;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      temp.next = arr[i];
      curNode = temp;
    }
    curNode.next = arr[i];
  }
  head = temp.next;
  return head;
};
console.log(sortList([4,2,1,3]));

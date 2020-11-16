/**
 * 功能：删除数组的最后一位元素
 * params 无
 * return 删除的元素
 * 会改变原数组
 */
Array.prototype.myPop = function() {
  let deleteItem;
  if (this.length > 0) {
    deleteItem = this[this.length - 1];
    this.length -= 1;
  }
  return deleteItem;
};


// test
let arr = [1, 2, 3,];
console.log('调用一次返回', arr.myPop());
console.log('调用一次结果', arr);
console.log('调用二次返回', arr.myPop());
console.log('调用二次结果', arr);
console.log('调用三次返回', arr.myPop());
console.log('调用三次结果', arr);
console.log('调用四次返回', arr.myPop());
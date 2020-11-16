/**
 * 伤处数组第一位元素
 */
Array.prototype.myShift = function() {
  let deleteItem;

  if (this.length > 0) {
    deleteItem = this[0];
    if (this.length > 1) {
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
    }
    this.length -= 1;
  }
  return deleteItem;
};

// test
const arr = [3, 2, 1];
console.log('第一次调用返回', arr.myShift());
console.log('第一次调用结果', arr);
console.log('第二次调用返回', arr.myShift());
console.log('第二次调用结果', arr);
console.log('第三次调用返回', arr.myShift());
console.log('第三次调用结果', arr);
console.log('第四次调用返回', arr.myShift());
/**
 * 功能：数组元素反转
 * params 无
 * return 反转后的数组
 * 会改变原数组
 * 思路：使用中间量接受数组，并改变原数组
 */
Array.prototype.myReverse = function() {
  let temp = [];
  for (let i = this.length - 1; i >= 0; i--) {
    temp[temp.length] = this[i];
  }
  for (let k = 0; k < temp.length; k++) {
    this[k] = temp[k];
  }
  return this;
};

// test
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myReverse());
console.log(arr);
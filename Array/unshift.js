/**
 * 功能：在原数组的开头添加元素
 * params 非必须
 * return 数组长度
 * 会改变原数组
 */
Array.prototype.myUnshift = function() {
  if (arguments.length > 0) {
    let temp = [];
    for (let i = 0; i < arguments.length; i++) {
      temp[i] = arguments[i];
    }
    for (let j = 0; j < this.length; j++) {
      temp[temp.length] = this[j];
    }
    for (let k = 0; k < temp.length; k++) {
      this[k] = temp[k];
    }
  }
  return this.length;
};

// test
let arr = ['aa'];
console.log('无参数', arr.myUnshift());
console.log('两个参数', arr.myUnshift('bb', 'cc'));
console.log('两个参数', arr);
console.log('传递数组', arr.myUnshift(['dd']));
console.log('传递数组', arr);
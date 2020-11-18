/**
 * 数组合并任意值
 * params any
 * return 返回后的数组
 * 不会改变原数组
 * 思路：声明一个中间量，深拷贝调用者，不传参直接返回新数组，数组参数元素分别合并，其他类型直接合并
 */
Array.prototype.myConcat = function() {
  let temp = [];
  if (this.length > 0) {
    for (let i = 0; i < this.length; i++) {
      temp[i] = this[i];
    }
  }
  if (arguments.length > 0) {
    for (let k = 0; k < arguments.length; k++) {
      {
        if (Array.isArray(arguments[k])) {
          for (let l = 0; l < arguments[k].length; l++) {
            temp[temp.length] = arguments[k][l];
          }
        } else {
          temp[temp.length] = arguments[k];
        }
      }
    }
  }
  return temp;
};

// test
let arr = [1, 2, 3, 4];
console.log('任意参数', arr.myConcat(5, 6, { a: 7 }, undefined, [8, [9]]));
console.log('任意参数官方', arr.concat(5, 6, { a: 7 }, undefined, [8, [9]]));
console.log('不传参', arr.myConcat());
console.log('不传参官方', arr.concat());
console.log('原数组', arr);
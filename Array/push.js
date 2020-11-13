/**
 * 不传参时，返回数组长度
 * 在数组后面追加元素（思路：元素组的长度永远是index+1，所以下一个元素的下表就是元素组长度）
 * 参数通过arguments获取，根据数量追加
 * 循环添加元素后，返回数组长度
 */
Array.prototype.myPush = function() {
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
  }
  return this.length;
};

// test
let arr = ['aa'];
console.log('不传参', arr.myPush());
console.log('arr没变化', arr);
console.log('传一个参数', arr.myPush('bb'));
console.log('传一个参数结果', arr);
console.log('传两个参数', arr.myPush('cc', 'dd'));
console.log('传两个参数结果', arr);
console.log('传数组', arr.myPush(['ee', 'ff']));
console.log('传数组结果', arr);

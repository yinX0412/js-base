/**
 * @param searchValue 搜索的value
 * @param fromIndex 起始位置
 * 不传参 返回-1
 * 不传起始位置从 0 开始检索 匹配相应下标并阻断流程 否则返回-1
 * 传入非数字起始位置，同上从0开始
 * 传入起始位置浮点型 向下取整
 * 传入起始位置小于0或者大于数组长度 返回-1
 */
Array.prototype.myIndexOf = function(searchValue, fromIndex) {
  if (!searchValue) {
    return -1;
  }
  let start;
  if (fromIndex && (typeof fromIndex === 'number')) {
    start = parseInt(fromIndex);
    if (start === -0) start = 0; // parseInt(-0.2) = -0
    if (start > this.length || start < 0) return -1;
  } else start = 0;
  for (start; start < this.length; start++) {
    if (this[start] === searchValue) return start;
  }
  return -1;
};

// test
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log('自定义：不传参', arr.myIndexOf());
console.log('官方：不传参', arr.indexOf());
console.log('--------------------------');
console.log('自定义：不传fromIndex', arr.myIndexOf(1));
console.log('官方：不传fromIndex', arr.indexOf(1));
console.log('--------------------------');
console.log('自定义：传入整型起始位置', arr.myIndexOf(4, 2));
console.log('官方：传入整型起始位置', arr.indexOf(4, 2));
console.log('--------------------------');
console.log('自定义：起始位置小于0', arr.myIndexOf(4, -1));
console.log('官方：起始位置小于0', arr.indexOf(4, -1));
console.log('--------------------------');
console.log('自定义：起始位置非数字', arr.myIndexOf(4, 'a'));
console.log('官方：起始位置非数字', arr.indexOf(4, 'a'));
console.log('--------------------------');
console.log('自定义：起始位置为浮点型', arr.myIndexOf(4, 2.1));
console.log('官方：起始位置为浮点型', arr.indexOf(4, 2.1));
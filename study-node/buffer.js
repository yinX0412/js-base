let buf1 = Buffer.from('a');
let buf2 = Buffer.from('bc');

let bu3 = Buffer.concat([buf1, buf2]);
console.log(bu3.toString());

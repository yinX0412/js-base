const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const fsp = require('fs').promises; // node v109

const filePath = path.join(__dirname, '../read.txt');
// 同步调用
// const readme = fs.readFileSync('./read.txt');
// console.log(readme.toString());

// 异步调用
// fs.readFile(, (err, data) => {
//     if (err) throw err;
//     console.log(data.toString())
// })

// const readFile = promisify(fs.readFile);
// readFile(filePath)
//     .then(data => console.log(data.toString()))

// fsp.readFile(filePath)
//     .then(data => console.log(data.toString()))

(async () => {
  const readFile = promisify(fs.readFile);
  const data = await readFile(filePath);
  console.log(data);
})();

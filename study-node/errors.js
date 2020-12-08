const process = require('process');

process.on('uncaughtException', (e) => {
  console.log('error1:', e);
});

setTimeout(() => {
  throw new Error('错误信息');
}, 100);

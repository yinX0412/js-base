const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const log = (content) => console.log(chalk.green(content));
const { clone } = require('./download');
module.exports = async (name) => {
  try {
    // 打印欢迎页面
    clear();
    const data = await figlet('pyx welcome !');
    log(data);
    log('创建下载:' + name);
    await clone('github:yinX0412/js-base', name);
  } catch (err) {
    console.log(err);
  }
};

const md5 = require('md5');

const name = '利煦承';
const hideName = md5(name);
console.log(hideName);
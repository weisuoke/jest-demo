// jest.mock('./util') 做了下面的工作
const Util = jest.fn(() => {
  console.log('constructor')
});
Util.prototype.a = jest.fn(() => {
  console.log('a')
});
Util.prototype.b = jest.fn(() => {
  console.log('b')
});

export default Util;

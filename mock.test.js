import { runCallback } from './mock'

test('测试 runCallback', () => {
  const func = jest.fn(); // mock函数，捕获函数的调用
  runCallback(func)
  expect(func).toBeCalled()
})

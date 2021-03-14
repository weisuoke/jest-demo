import { generateConfig, generateAnotherConfig } from './snapshot'

test('测试 generateConfig 函数', () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date)
  })
})

test('测试 generateAnotherConfig 函数', () => {
  expect(generateAnotherConfig()).toMatchSnapshot({
    time: expect.any(Date)
  })
})

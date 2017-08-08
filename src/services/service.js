import uris from './uris.js'

/**
 * 这是一个测试接口
 * @param {*} params - post 方法 所需的参数
 */
function test (params) {
  let url = uris.test
  return this.$http.post(url, params)
    .then((resp) => {
      return resp
    })
}

export {
  test
}

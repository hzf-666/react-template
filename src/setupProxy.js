/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-03-30 09:28:49
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-19 09:22:16
 */
const { createProxyMiddleware: proxy } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: process.env.REACT_APP_API_URL,
      secure: false, // 是否验证htpps的安全证书，如果域名是https需要配置此项
      changeOrigin: true, // 必须设置为true
      // pathRewrite: {
      //   '^/api': ''
      // }
    }),
  );
};

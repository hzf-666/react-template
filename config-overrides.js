/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-03-30 11:59:23
 * @LastEditors: hzf
 * @LastEditTime: 2022-07-25 16:37:25
*/
const path = require('path'),
  AutoImport = require('unplugin-auto-import/webpack'),
  { override, addWebpackAlias, adjustStyleLoaders } = require('customize-cra'),
  globalData = require('./src/global/data.js'),
  resolve = dir => path.resolve(__dirname, dir);

const dev = process.env.NODE_ENV === 'development';
process.env.PUBLIC_URL = dev ? '/' : '/web/';

module.exports = override(
  config => {
    const paths = require('react-scripts/config/paths');
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'web');
    config.output.path = paths.appBuild;
    paths.publicUrlOrPath = process.env.PUBLIC_URL;
    config.output.publicPath = process.env.PUBLIC_URL;
    config.devtool = false; // 去掉map文件
    config.plugins = [
      ...config.plugins,
      AutoImport({
        imports: ['react', 'react-router', {
          'prop-types': ['PropTypes'],
          react: ['createContext'],
        }],
        resolvers: [
          name => {
            for (const _name of globalData) {
              if (name === '$' + _name) {
                return {
                  from: '@/global',
                  name: _name,
                };
              }
            }
            if (name.startsWith('$use')) {
              return {
                from: '@/hooks',
                name: name.replace('$', ''),
              };
            }
          },
        ],
      }),
    ];
    return config;
  },
  addWebpackAlias({
    '@': resolve('src'),
    '@a': resolve('src/assets'),
    '@c': resolve('src/components'),
    '@p': resolve('src/plugins'),
    '@u': resolve('src/utils'),
    '@v': resolve('src/views'),
  }),
  adjustStyleLoaders(rule => { // 配置指定文件为sass全局文件，可以不用导入就可以使用
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: [
            './src/scss/variate.scss',
          ]
        }
      });
    }
  }),
);

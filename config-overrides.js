/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-03-30 11:59:23
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-21 18:19:41
 */
// import AutoImport from 'unplugin-auto-import/webpack';

const path = require('path'),
  AutoImport = require('unplugin-auto-import/webpack'),
  { override, addWebpackAlias, adjustStyleLoaders } = require('customize-cra'),
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
        }],
        resolvers: [
          name => {
            switch (name) {
              case '$g':
                return '@/global/data.js';
              case '$http':
                return '@/http/index.js';
              case 'React':
                return 'react';
              case 'ReactDOM':
                return 'react-dom';
              case 'classnames':
                return 'classnames';
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
    '@h': resolve('src/hooks'),
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
  })
);

/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-03-30 10:41:24
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-19 16:45:55
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RouterGuard from './RouterGuard.js';
import Error from '@v/Error';
import Login from '@v/Login';
import Home from '@v/Home';

const Comps = {
    Error,
    Login,
    Home,
  },
  RouteConfigs = [
    { name: 'Error', path: '/404', title: '404 not found' },
    { name: 'Login', path: '/login', title: '登录' },
    { name: 'Home', path: '/home', title: '首页' },
  ];

function Router() {
  const token = $g.caches('session').get('token'),
    hasToken = !!token;

  return (
    <BrowserRouter>
      <Routes>
        {RouteConfigs.map(config => {
          const Comp = Comps[config.name];
          return (
            <Route
              key={config.name}
              path={config.path}
              element={<RouterGuard {...config} comp={<Comp />} />}
            />
          );
        })}
        <Route path="/" element={<Navigate to={hasToken ? '/home' : '/login'} />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

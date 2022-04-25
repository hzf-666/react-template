/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-03-29 11:39:39
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-25 22:04:09
 */
import { createRoot } from 'react-dom/client';
import Router from './router';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import './scss/index.scss';
import sassExport from './scss/export.module.scss';

function setDomStyle() {
  const standardWidth = 750,
    maxMobileWidth = 960,
    scale = Number(sassExport.scale),
    width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = width > maxMobileWidth ? `${ scale / 2 }px` : (width * scale / standardWidth + 'px');
}
setDomStyle();
window.addEventListener('resize', setDomStyle);

createRoot(document.getElementById('root')).render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

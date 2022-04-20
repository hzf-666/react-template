/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-03-29 11:39:39
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-20 11:37:43
 */
import { createRoot } from 'react-dom/client';
import Router from './router';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import './scss/index.scss';

function setDomStyle() {
  const width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight;
  document.documentElement.style.setProperty('--app-height', `${ height }px`);
  document.documentElement.style.fontSize = width * 100 / 750 + 'px';
}
setDomStyle();
window.addEventListener('resize', setDomStyle);

createRoot(document.getElementById('root')).render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

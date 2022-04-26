/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-08 11:20:39
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-26 10:14:33
 */
export default function(type = 'local') {
  if (type === 'session') {
    return {
      get(key) {
        return sessionStorage.getItem(key);
      },
      set(key, value) {
        sessionStorage.setItem(key, value);
      },
      remove(key) {
        sessionStorage.removeItem(key);
      },
      clear() {
        sessionStorage.clear();
      },
    };
  }
  if (type === 'local') {
    return {
      get(key) {
        return localStorage.getItem(key);
      },
      set(key, value) {
        localStorage.setItem(key, value);
      },
      remove(key) {
        localStorage.removeItem(key);
      },
      clear() {
        localStorage.clear();
      },
    };
  }
}

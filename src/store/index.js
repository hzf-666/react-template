/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-26 18:04:26
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-26 20:35:54
 */
import { createContext, useContext, useState } from 'react';

const modules = require.context('./modules', true, /\.js$/),
  reg = /^\.\/(.*)\.js$/,
  space = {};

modules.keys().forEach(k => {
  space[k.replace(reg, '$1')] = modules(k).default;
});

const Store = createContext(),
  createStore = () => {
    const [state, setState] = useState({
        count: 0,
      }),
      [spacedState, setSpacedState] = useState({
        ...space
      });

    return [
      function(key) {
        const arr = key.split('/');
        if (arr.length == 1) {
          return state[key];
        } else {
          return spacedState[arr[0]][arr[1]];
        }
      },
      function(key, value) {
        const arr = key.split('/');
        if (arr.length == 1) {
          const newState = { ...state };
          newState[key] = value;
          setState(newState);
        } else {
          const newSpacedState = { ...spacedState };
          spacedState[arr[0]][arr[1]] = value;
          setSpacedState(newSpacedState);
        }
      },
    ];
  };

export {
  Store,
  createStore,
};

export default function() {
  return useContext(Store);
}

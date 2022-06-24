/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-02 16:12:40
 * @LastEditors: hzf
 * @LastEditTime: 2022-06-24 14:50:29
 */
export function useUpdated(callback) {
  let isFirstRender = false;
  useEffect(() => {
    isFirstRender = true;
  }, []);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
    } else {
      callback && callback();
    }
  });
}

export function useApiLoading(api) {
  const [loading, setLoading] = useState(false);
  return [loading, (...args) => {
    let index = 0;
    if (args.length > 1) {
      index = args[args.length - 1];
    }
    args[index] = {
      setLoading,
      ...args[index],
    };
    return api(...args);
  }];
}

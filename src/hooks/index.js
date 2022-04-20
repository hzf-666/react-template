/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-02 16:12:40
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-20 12:11:19
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
  return [loading, (option) => {
    return api({ setLoading, ...option });
  }];
}

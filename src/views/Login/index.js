/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-11 14:51:49
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-26 20:36:34
 */
import './scss/index.scss';
import { getCaptcha } from '@/api';

function Login() {
  const navigate = useNavigate();
  const [loadingCaptcha, toGetCaptcha] = $useApiLoading(getCaptcha);
  const store = $useStore(), count = store.get('count');

  useEffect(() => {
    (async function() {
      await toGetCaptcha().then(res => {
        console.log(res);
      });
    })();

    // $http.all([
    //   getCaptcha({ message: false })
    // ], {
    //   message: true,
    //   successMsg: '并行请求成功',
    //   failMsg: '并行请求失败',
    // }).then(res => {
    //   if (res.code == 200) {
    //     console.log(res.data);
    //   }
    // });
  }, []);

  $useUpdated(() => {
    console.log('页面渲染更新');
  });
  return (
    <>
      {String(loadingCaptcha)}
      {count}
      <div>登录页面</div>
      <button onClick={() => navigate('/home')}>登录</button>
      <button onClick={() => store.set('count', count + 1)}>计数</button>
    </>
  );
}

export default Login;

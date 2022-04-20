/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-11 14:51:49
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-20 19:34:17
 */
import './scss/index.scss';
import { getCaptcha } from '@/api';

function Login() {
  const navigate = useNavigate();
  const [loadingCaptcha, toGetCaptcha] = $g.useApiLoading(getCaptcha);

  useEffect(() => {
    (async function() {
      await toGetCaptcha().then(res => {
        console.log(res);
      });
    })();

    // $http.all([
    //   getCaptcha({ showTip: false })
    // ], {
    //   showTip: true,
    //   successTip: '并行请求成功',
    //   failTip: '并行请求失败',
    // }).then(res => {
    //   if (res.code == 200) {
    //     console.log(res.data);
    //   }
    // });
  }, []);

  $g.useUpdated(() => {
    console.log('页面渲染更新');
  });
  return (
    <>
      {String(loadingCaptcha)}
      <div>登录页面</div>
      <button onClick={() => navigate('/home')}>登录</button>
    </>
  );
}

export default Login;

/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-11 14:51:49
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-26 19:53:04
 */
import './scss/index.scss';

function Home() {
  const navigate = useNavigate();
  const store = $useStore(), count = store.get('count');

  return (
    <>
      {count}
      <div>首页</div>
      <button onClick={() => navigate('/')}>返回</button>
    </>
  );
}

export default Home;

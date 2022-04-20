/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-02 14:18:05
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-19 15:35:22
 */
import './scss/index.scss';

function Four0Four() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/', { replace: true })}>返回首页</button>
  );
}

export default Four0Four;

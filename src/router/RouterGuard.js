/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-19 10:47:50
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-19 15:07:34
 */
function RouterGuard(props) {
  document.title = props.title || '';

  return (
    props.comp
  );
}

export default RouterGuard;

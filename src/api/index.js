/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-04-08 12:07:28
 * @LastEditors: hzf
 * @LastEditTime: 2022-04-20 10:30:44
 */
const baseUrl = '/api/userSystem/common';

export async function getCaptcha(options = {}) { // 获取验证码
  options = {
    successMsg: '',
    failMsg: '',
    ...options,
  };
  return await $http.get(`${ baseUrl }/captcha`, options);
}

export async function uploadFile(options = {}) { // 上传文件
  const formData = new FormData();
  options.data && Object.keys(options.data).forEach(k => {
    formData.append(k, options.data[k]);
  });
  options = {
    successMsg: '',
    failMsg: '',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...options,
    data: formData,
  };
  return await $http.post(`${ baseUrl }/file`, options);
}

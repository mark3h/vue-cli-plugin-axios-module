// 单点登录 模块2
import http from '../http';
import url from '../url';

export default {
  login(data) {
    return http({
      method: 'get',
      url: `${url.sso}/api/v1/login`,
      data
    });
  }
};

// 业务模块1
import http from '../http';
<%_ if (options.multiple === 'muti') { _%>
import url from '../url';
<%_ } _%>

export default {
  getList(params) {
    return http({
      method: 'get',
      <%_ if (options.multiple === 'muti') { _%>
      url: `${url.backend}/api/v1/list`,
      <%_ } _%>
      <%_ if (options.multiple === 'sing') { _%>
      url: `/api/v1/list`,
      <%_ } _%>
      params
    });
  },
};

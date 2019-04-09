import utils from './utils';

// 本地收集所有接入系统的URL
const config = {
  <% _ if (options.multiple === 'muti') { _%>
  sso: {
    development: 'www.ssodev.com',
    qa: 'www.ssoqa.com',
    prod: 'www.ssoprod.com'
  },
  <%_ } _%>
  backend: {
    development: 'www.bedev.com',
    qa: 'www.beqa.com',
    prod: 'www.beprod.com'
  }
};

// 默认为development环境
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const url = utils.transURL(config, env);

export default url;

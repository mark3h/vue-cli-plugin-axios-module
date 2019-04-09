# vue-cli-plugin-axios-module
**:rocket: 基于Vue-cli 3.0的axios插件，帮助你快速搭建前后端交互模块**

## Features
* 支持 单/多 系统交互
* 环境变量配置
* 业务模块划分
* 请求拦截器集成

## Usage
terminal:
```javascript
vue add axios-module
```
图形化(vue ui):

搜索 **vue-cli-plugin-axios-module** 即可

## FAQ
**单/多 系统交互**

API的地址在api/url.js中进行配置

如果只与单系统进行交互，只需配置系统名称与不同环境的地址即可

如果与多系统进行交互，例如:

单点登录是单独一套服务(www.sso.com/api/v1/)

业务端是单独一套服务(www.backend.com/api/v1/)

那么就需要在api/url.js config中配置各个系统的名称以及不同环境下的地址


**环境变量配置**
```javascript
// api/url.js
const config = {
	// sso端不同环境对应的地址
	sso: {
		development: 'www.ssodev.com',
		qa: 'www.ssoqa.com',
		prod: 'www.ssoprod.com'
	},
	// 业务端不同环境对应的地址
	backend: {
		development: 'www.bedev.com',
		qa: 'www.beqa.com',
		prod: 'www.beprod.com'
	}
}
```
在此文件中，请填写你的各系统不同环境的地址，最终会根据你的NODE_ENV环境变量导出一个对象（默认NODE_ENV为development）
```javascript
// 导出的url对象
{
	sso: 'www.ssodev.com',
	backend: 'www.bedev.com'
}
```
**业务模块划分**

modules文件下是各个业务模块的API模块，使用时在你的业务组件中调用即可
```javascript
import http from '../http';
import url from '../url';
export default {
  getList(params) {
    return http({
      method: 'get',
      url: `${url.backend}/api/v1/list`,
      params
    });
  },
};
```





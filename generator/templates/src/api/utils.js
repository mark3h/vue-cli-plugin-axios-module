export default {
  transURL(config, env) {
    if (!env) throw new Error('please set NODE_ENV');
    let url = {};
    for (let key in config) {
      url[key] = config[key][env];
    }

    return url;
  }
};

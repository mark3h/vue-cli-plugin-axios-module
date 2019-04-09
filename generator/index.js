module.exports = (api, opts, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0'
    }
  })

  api.render({
    './src/api/http.js': './templates/src/api/http.js',
    './src/api/module/backend.js': './templates/src/api/module/backend.js',
    './src/api/url.js': './templates/src/api/http.js'
  })

  if (opts.multiple == 'muti') {
    api.render({
      './src/api/module/sso.js': './templates/src/api/module/sso.js',
      './src/api/utils.js': './templates/src/api/utils.js'
    })
  }


}

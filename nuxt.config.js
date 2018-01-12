module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://bootswatch.com/4/flatly/bootstrap.min.css' }
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~/assets/css/main.css'],

  // plugins: ['~/plugins/feathers'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      '@feathersjs/feathers',
      '@feathersjs/authentication-client',
      '@feathersjs/socketio-client',
      'socket.io-client'
    ],
  //   /*
  //   ** Run ESLINT on save
  //   */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     });
    //   }
    // }
  }
};

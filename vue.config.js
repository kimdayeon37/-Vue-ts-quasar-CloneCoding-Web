
// eslint-disable-next-line no-undef
module.exports = { 
    devServer: {
      proxy: { 
        '/api': { 
          target: 'http://localhost:3000/api',
          changeOrigin: true, 
          pathRewrite: { 
            '^/api': ''
          } 
        } 
      } 
    },
    outputDir: '../backend/public',
    css: {
        loaderOptions: {
          sass: {
            additionalData: `
              @import "@/style/_variables.scss";
              @import "@/style/_mixin.scss";
            `
          }
        }
      }
  }
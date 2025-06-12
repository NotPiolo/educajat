const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/__/auth/handler',
    createProxyMiddleware({
      target: 'https://TU_PROYECTO.firebaseapp.com',
      changeOrigin: true,
    })
  );
};
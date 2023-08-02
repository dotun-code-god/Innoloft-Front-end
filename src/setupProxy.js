const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { target: 'http://127.0.0.1:5173/' })),
        app.use(proxy('https://api-test.innoloft.com/configuration/1', { target: 'http://127.0.0.1:5173/' })),
        app.use(proxy('https://api-test.innoloft.com/configuration/2', { target: 'http://127.0.0.1:5173/' })),
        app.use(proxy('https://api-test.innoloft.com/product/6781', { target: 'http://127.0.0.1:5173/' }))
}
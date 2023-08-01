const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { target: 'http://localhost:5000/' })),
        app.use(proxy('https://api-test.innoloft.com/configuration/1', { target: 'http://localhost:5000/' }))
        app.use(proxy('https://api-test.innoloft.com/configuration/2', { target: 'http://localhost:5000/' }))
}
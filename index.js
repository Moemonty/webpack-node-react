const express = require('express')
const webpack = require('webpack');
const config = require('./webpack.common.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path')
const PORT = process.env.PORT || 5001


if (process.env.ENVIRONMENT == 'PRODUCTION') {
  express()
    .use('/', express.static(path.resolve(__dirname, 'dist'))
  ).listen(PORT, () => console.log(`Listening on ${ PORT }`))
} else {
  express().use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  ).listen(PORT, () => console.log(`Listening on ${ PORT }`))
}



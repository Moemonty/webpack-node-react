const express = require('express')
const webpack = require('webpack');
const config = require('./webpack.common.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path')
const PORT = process.env.PORT || 5001

express().use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
  // .use('/', express.static(path.resolve(__dirname, 'dist')))
  // .use(express.static(path.resolve(__dirname, 'dist'))
  // .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
).listen(PORT, () => console.log(`Listening on ${ PORT }`))

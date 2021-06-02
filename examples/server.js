const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const { router } = require('./router')

const app = express()
// 获取编译器
const complier = webpack(WebpackConfig)

app.use(
  webpackDevMiddleware(complier, {
    publicPath: '/__build__/',
    stats: {
      colors: true,
      chunks: false
    }
  })
)

app.use(webpackHotMiddleware(complier))

app.use(express.static(__dirname))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}...`)
})

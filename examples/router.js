const express = require('express')
const router = express.Router()

router.get('/simple/get', function(req, res) {
  res.json({
    msg: 'hello world'
  })
})

router.get('/base/get', function(req, res) {
  res.json(req.query)
})

router.get('/error/get', function(req, res) {
  if (Math.random() > 0.5) {
    res.json({
      msg: `hello world`
    })
  } else {
    res.status(500)
    res.end()
  }
})

router.get('/error/timeout', function(req, res) {
  setTimeout(() => {
    res.json({
      msg: `hello world`
    })
  }, 3000)
})

router.post('/base/post', function(req, res) {
  res.json(req.body.data)
})

router.post('/base/buffer', function(req, res) {
  let msg = []
  req.on('data', chunk => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

module.exports = {
  router
}

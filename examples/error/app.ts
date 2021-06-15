import axios from '../../src/index'

axios({
  method: 'get',
  url: '/error/get',
  params: {
    a: 1,
    b: 2
  }
}).catch(err => {
  console.log(err)
})

axios({
  method: 'get',
  url: '/error/timeout',
  params: {
    a: 1,
    b: 2
  },
  timeout: 1000
}).catch(err => {
  console.log(err)
})

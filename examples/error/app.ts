import axios, { AxiosError } from '../../src/index'

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
}).catch((e: AxiosError) => {
  console.log(e.code)
  console.log(e.config)
  console.log(e.isAxiosErrpr)
  console.log(e.message)
  console.log(e.request)
})

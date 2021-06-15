import { AxiosPromise, AxiosRequestConfig, Method } from '../types'
import dispatchRequest from './dispatchRequest'

export default class Axios {
  request(config: AxiosRequestConfig): AxiosPromise {
    return dispatchRequest(config)
  }

  __withoutDataRequest(url: string, method: Method, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(
      Object.assign(config, {
        method,
        url
      })
    )
  }

  __withDataRequest(
    url: string,
    method: Method,
    config?: AxiosRequestConfig,
    data?: any
  ): AxiosPromise {
    return this.request(
      Object.assign(config, {
        method,
        url,
        data
      })
    )
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.__withoutDataRequest(url, 'get', config)
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.__withoutDataRequest(url, 'delete', config)
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.__withoutDataRequest(url, 'head', config)
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.__withoutDataRequest(url, 'options', config)
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.__withDataRequest(url, 'post', config, data)
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.__withDataRequest(url, 'put', config, data)
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.__withDataRequest(url, 'patch', config, data)
  }
}

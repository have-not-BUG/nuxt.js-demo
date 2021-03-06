import axios from '@nuxtjs/axios'

export default function ({ route }) {
  console.log('中间件route.fullPath',route.fullPath)
  // return axios.post('http://my-stats-api.com', {
  //   url: route.fullPath
  // })
}

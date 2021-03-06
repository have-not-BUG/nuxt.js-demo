export default function (context) {
  console.log('每次都执行的中间件-是否在服务器端process.server: ',process.server)
  // console.log('中间件context',context)
  // context.userAgent = process.server
  //   ? context.req.headers['user-agent']
  //   : navigator.userAgent
}

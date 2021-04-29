const http = require('http')
const fsp = require('fs/promises')
const fs = require('fs')
const p = require('path')
const url = require('url')
const port = process.argv[2] || process.env.PORT
const dist = p.join(__dirname, './frontend/dist')
const {addCookie} = require('./server/addCookie')

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}
const mimeMap = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  svg: 'image/svg+xml'
}

const server = http.createServer(async function (request, response) {
  const {pathname: path, searchParams: query, search} =
    new url.URL(request.url, `http://localhost:${port}`)
  const {method} = request
  const filePath = path === '/' ? '/index.html' : path
  const fullFilePath = p.join(dist, filePath)
  const extension = p.extname(fullFilePath).substr(1)

  const onFileNotFound = () => {
    console.log('not found')
  }
  await fsp.access(fullFilePath, fs.constants.R_OK)
    .catch(onFileNotFound)
  const stat = await fsp.stat(fullFilePath)
  if (stat.isFile()) {
    response.statusCode = 200
    const mime = mimeMap[extension] || 'text/html'
    response.setHeader('Content-Type', `${mime};charset=utf-8`)
    addCookie(request, response)
    const content = await fsp.readFile(fullFilePath)
    response.write(content)
    response.end()
  }

  console.log('请求处理完毕\n')
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


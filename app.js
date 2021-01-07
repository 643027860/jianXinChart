// 1. 引包
var express = require('express')
var path = require('path')
var body = require('body-parser')
var session = require('express-session')

var router = require('./router/router')

// 2. 创建服务
var app = express()

// 3. 中间件配置
// 暴露公告资源，建议设计文件路径的都是用 path.json(__dirname/filename,...) 进行拼接
app.use('/public/', express.static(path.join(__dirname, '/public/')))
app.use('/node_modules/', express.static(path.join(__dirname, '/node_modules/')))

// 配置解析表单中的 Post 请求体
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置 Session，express 默认不支持 session / cookie，所以需要借助第三方库： express-session
app.use(session({
  secret: 'talentBaoDao',
  resave: false,
  saveUninitialized: false
}))

// 4.引入路由
app.use(router)

// 5. 开启服务
app.listen(5000, () => {
  console.log('服务已开启')
})


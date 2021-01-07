// 1. 引包
var express = require('express')
var fs = require('fs')
var md5 = require('blueimp-md5')

// 引入数据库操作模型
var User = require('./models/user')

// 2. 创建一个路由容器
var router = express.Route()

// 3.

var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.conf');

var app = express();

var compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

// 利用webpack的插件来监测index.html的改动事件
compiler.plugin('compilation', function (compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		hotMiddleware.publish({ action: 'reload' });
		cb();
	})
});

app.use(devMiddleware);

app.use(hotMiddleware);

app.listen(8888, function (err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Listening at the port 8888');
});
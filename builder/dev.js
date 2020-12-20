/*
 * @Author: your name
 * @Date: 2020-12-19 20:10:54
 * @LastEditTime: 2020-12-20 11:38:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-vue\builder\dev.js
 */

process.env.NODE_ENV = 'development';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackRenderConfig = require('./webpack.render.js');
const webpackMainConfig = require('./webpack.main.js');
const chalk = require('chalk');


// 构建开发环境
function devRender(){
    return new Promise((resolve, reject) => {
        const compiler = webpack(webpackRenderConfig);
        new WebpackDevServer(compiler, {
            contentBase: webpackRenderConfig.output.path,
            publicPath: webpackRenderConfig.output.publicPath,
            compress: true,        // 开发服务器启用gzip压缩
            progress: true,        // 控制台显示打包进度
            hot: true,            // 热加载
        }).listen(8083, 'localhost', err => {
            if(err) reject(err);
            console.log(chalk.blue('\n Listening at http://localhost:8083 \n'));
            resolve('渲染进程打包完毕');
        })
    });
}


function devMain(){
    return new Promise((resolve, reject) => {
        　// 运行 webpack打包
        webpack(webpackMainConfig, err => {
            if(err){
                reject('打包主进程遇到Error！');
            } else {
                resolve("打包主进程成功");
            }
        })
    });
}

Promise.all([devMain(), devRender()]).then(res => {
    console.log('\n'+ res.join(' ') + '\n');
}).catch(err => {
    console.log(err);
});
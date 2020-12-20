/*
 * @Author: your name
 * @Date: 2020-12-19 20:16:07
 * @LastEditTime: 2020-12-19 23:07:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-vue\src\main\createWindow\index.js
 */

const { BrowserWindow } = require('electron');

module.exports = {
    createMianWin(options = {}){
        options = Object.assign({
            width: 1200,    // 窗口宽度
            height: 800,    // 窗口高度
            // autoHideMenuBar:true,
            backgroundColor: '#fff',    // 窗口背景颜色
            show: false,                // 创建窗口后不显示窗口
            hasShadow: false,
            webPreferences:{
                nodeIntegration: true, // 在渲染进程引入node模块
            }
        }, options);
        return new BrowserWindow(options);
    }
}
/*
 * @Author: your name
 * @Date: 2020-12-19 20:11:58
 * @LastEditTime: 2020-12-20 12:47:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-vue\src\main\index.js
 */

const path = require('path');
const url = require('url');
const electron = require('electron');
const { createMianWin } = require('./createWindow');

class App {
    constructor({app, BrowserWindow}){
        this.mode = process.env.NODE_ENV;
        this.BrowserWindow = BrowserWindow;
        this.app = app;
        this.win = null;
        this.eventHandle(app);
    }
    createWindow(){
        this.win = createMianWin();
        let filePath = this.mode === 'production'
			? url.pathToFileURL(path.join(__dirname, 'index.html')).href
			: "http://localhost:8083/";
		this.win.loadURL(filePath);
        // 等待渲染进程页面加载完毕再显示窗口
        this.win.once('ready-to-show', () => this.win.show())
    }
    eventHandle(app){
        app.on('closed', () => this.closed());
        app.on('ready', () => this.ready());
        app.on('window-all-closed', () => this.windowAllClosed());
        app.on('activate', () => this.activate());
    }
    activate(){
        if(!this.win) this.createWindow();
    }
    windowAllClosed(){
        if(process.platform !== 'darwin') this.app.quit();
    }
    ready(){
        this.createWindow();             // 创建主窗口
    }
    closed(){
        this.win = null;
    }
}

let app = new App(electron);
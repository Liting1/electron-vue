/*
 * @Author: your name
 * @Date: 2020-12-19 20:12:07
 * @LastEditTime: 2020-12-19 21:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-vue\src\renderer\index.js
 */

import Vue from 'vue';
import App from './App';

const app = new Vue({
    render: h => h(App)
}).$mount("#app");

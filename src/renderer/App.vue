<!--
 * @Author: your name
 * @Date: 2020-12-19 20:13:48
 * @LastEditTime: 2020-12-19 23:22:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-vue\src\renderer\App.vue
-->
<template>
<div> 
    <h1>{{txt}}</h1>
</div>
</template>

<script>
export default {
    data(){
        return {
            txt: 'hello electron 11.1'
        }
    }
}
</script>

<style lang="sass" scoped>
h1
    color: red
</style>
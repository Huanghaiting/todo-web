//.vue文件是vue的开发方式，位于根目录src文件夹下
//vue要显示出来的模板
<template>
  <div id="app">{{text}}</div>
</template>

//控制显示内容如何变化
<script>
export default {
  el:
    data() {
  return {
    text: 'abc'
  }
}
}
</script>

<style>
#app {
  color: red;
}
</style>
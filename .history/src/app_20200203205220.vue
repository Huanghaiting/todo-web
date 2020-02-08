// 这是一个组件不能直接挂载到HTML里面去，所以要配置webpack文件
<template>
  <div id="text">{{text}}</div>
</template>

<script>
export default {
  data () {
    return {
      text: '1234545'
    }
  }
}
</script>

<style>
/* #text {
  color: red;
} */
</style>
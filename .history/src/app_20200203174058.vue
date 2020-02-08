// 这是一个组件不能直接挂在到HTML里面去
<template>
  <div id="test">{{test}}</div>
</template>

<script>
export default {
  data () {
    return {
      test: '1234545'
    }
  }
}
</script>

<style>
#test {
  color: red;
}
</style>
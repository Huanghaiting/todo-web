//.vue文件是vue的开发方式，位于根目录src文件夹下
//vue要显示出来的模板

 <template>
  <div id="app">
    <div id="cover">1111</div>
  </div>

</template>

//控制显示内容如何变化
<script>
export default {

  data () {
    return {
      text: 'abcdsfdfdfddfdfdfd'
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
#cover
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color: #999999
  opacity: 0.9
  z-index: 1
</style>

//.vue文件是vue的开发方式，位于根目录src文件夹下
//vue要显示出来的模板

 <template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>

</template>

//控制显示内容如何变化
<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import todo from './todo/todo.vue'
export default {
  components: { Header, Footer, todo },
  data () {
    return {

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
  opacity: 0.5
  z-index: 1
</style>

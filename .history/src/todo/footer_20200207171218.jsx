// const footer = {
//   fontSize: 10 + 'px',
//   color: 'blue',
//   textAlign: 'center'
// }
import footer from '../assets/stylus/footer'
export default {
  data() {
    return {
      author: 'HuangHaiTing'
    }
  },
  render() {
    return (
      // <div style={footer}>
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}

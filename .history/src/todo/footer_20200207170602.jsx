const footer = {
  fontSize: 10 + 'px',
  color: 'blue',
  textAlign: center
}
export default {
  data() {
    return {
      author: 'HuangHaiTing'
    }
  },
  render() {
    return (
      <div style={footer}>
        <span>Written by {this.author}</span>
      </div>
    )
  }
}

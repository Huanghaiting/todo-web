const footer = {
  fontSize: 10 + 'px',
  color: '#FF0000'
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

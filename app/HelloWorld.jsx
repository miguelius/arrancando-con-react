/* Component en es2015 y jsx
 */
class HelloWorld extends React.Component {
  render() {
    if (this.props.heading) return <h1>{this.props.message}</h1>
    return <p>{this.props.message}</p>
  }
}

import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
  state = {
    count: 0
  }
  add = () => {
    console.log("add")
    this.setState({count: this.state.count + 1})
  }
  minus = () => {
    console.log('minus')
    this.setState({count: this.state.count - 1})
  }
  render() {
    console.log("render")
    return (
      <div>
        <h1>number is {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;

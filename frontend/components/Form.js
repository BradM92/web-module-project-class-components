import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ""
    }
  }
  addTodo = (e) => {
    e.preventDefault();
    this.props.addSubmit(this.state.input);
  }

  InputAdd = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form>
          <input onChange = {this.InputAdd}/>
          <button onClick = {this.addTodo}>Add</button>
        </form>
      </div>
    )
  }
}

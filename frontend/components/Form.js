import React from 'react'

export default class Form extends React.Component {
  addTodo = (e) => {
    e.preventDefault();
    this.props.addSubmit();
  }
  render() {
    return (
      <div>
        <form>
          <input />
          <button onClick = {this.addTodo}>Add</button>
        </form>
      </div>
    )
  }
}

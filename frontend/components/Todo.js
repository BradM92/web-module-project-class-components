import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.todos.name}{this.props.todos.completed? <span>--completed</span> : <span></span>}</li>
      </div>
    )
  }
}

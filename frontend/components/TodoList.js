import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todos => {
          return(<Todo  handleCompleted = {this.props.handleCompleted}todos = {todos} key ={todos.id} />)
        })}
      </div>
    )
  }
}

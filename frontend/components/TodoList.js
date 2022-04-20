import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todos => {
          return(<Todo todos = {todos} key ={todos.id} />)
        })}
      </div>
    )
  }
}

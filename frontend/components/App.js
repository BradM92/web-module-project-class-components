import React from 'react'
import TodoList from './TodoList';
import Form from './Form';


export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todos:  [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        }
      ]
    }
    
  }
  ClearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return(todo.completed === false)
      })
    })
  }

  addSubmit = () => {

    const newTodo = {
      name:"cook dinner",
      id:Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    
    return (
      <div>
        <TodoList  todos = {this.state.todos}/>
        <Form addSubmit = {this.addSubmit}/>
        <button onClick={this.ClearCompleted}> Clear Completed</button>
    
        Todo App
      </div>
    )
  }
}

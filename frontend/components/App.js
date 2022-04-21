import React from 'react'
import TodoList from './TodoList';
import Form from './Form';
const Todos = [
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

export default class App extends React.Component {
  constructor(){
    super();
    this.state = Todos;
    
  }
  ClearCompleted = () => {

  }
  render() {
    const todos = this.state;
    
    return (
      <div>
        <TodoList  todos = {todos}/>
        <Form />
        <button onClick={this.ClearCompleted}> Clear Completed</button>
    
        Todo App
      </div>
    )
  }
}

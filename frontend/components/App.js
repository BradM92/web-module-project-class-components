import React from 'react'
import TodoList from './TodoList';
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
  render() {
    const todos = this.state;
    
    return (
      <div>
        <TodoList  todos = {todos}/>
        <form>
          <input />
          <button>Add</button>
        </form>
        <button> Clear Completed</button>
    
        Todo App
      </div>
    )
  }
}

import React from 'react'
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
        
        {todos.map(todos => {
          return(<li>{todos.name}{todos.completed? <span>--completed</span> : <span></span>}</li>)
        })}
        <form>
          <input />
          <button>Add</button>
        </form>
        <button> Clear Completed</button>
      </div>
    )
  }
}

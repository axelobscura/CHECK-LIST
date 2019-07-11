import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [
        {task: 'Walk the Fish'},
        {task: 'Find Fantastic remote job'},
        {task: 'Go to swim'}
      ]
    };
    this.create = this.create.bind(this);
  }
  create(newTodo){
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() { 
    const todos = this.state.todos.map(todo => (
      <Todo task={todo.task} />
    ));
    return (
      <div>
        <h1>TODO LIST</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}
 
export default TodoList;
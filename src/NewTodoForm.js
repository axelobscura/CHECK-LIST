import React, { Component } from 'react';
import './newTodoForm.css';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.createTodo({...this.state, id: uuid(), completed: false});
    this.setState({
      task: ''
    })
  }
  render() { 
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <label htmlFor="task">New Todo</label>
        <input 
          type="text" 
          placeholder='New Todo' 
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>SUBMIT TASK</button>
      </form>
    );
  }
}
 
export default NewTodoForm;
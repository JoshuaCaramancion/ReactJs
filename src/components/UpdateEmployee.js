import React, { Component } from 'react';
import axios from 'axios';

class AddEmployee extends Component {
  state = {
    name: '',
    salary: 0,
    age: 0
  };

  handleSubmit = event => {
    event.preventDefault();

    const details = {
      name: this.state.name,
      salary: this.state.salary,
      age: this.state.age
    };

    axios
      .put(`http://dummy.restapiexample.com/api/v1/update@/${id}`, details)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    return (
      <div id='msform'>
        <h1>Add new Eployee</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            className='effect-2'
            type='text'
            placeholder='Name:'
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <input
            type='number'
            name='employee_salary'
            placeholder='Employee Salary'
            onChange={event => this.setState({ salary: event.target.value })}
          />
          <input
            type='text'
            name='employee_name'
            placeholder='Employee Age'
            onChange={event => this.setState({ age: event.target.value })}
          />
          <button className='action-button' type='submit'>
            ADD EMPLOYEE
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateEmployee;

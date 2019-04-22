import React, { Component } from 'react';
import axios from 'axios';

class AddEmployee extends Component {
  state = {
    name: '',
    salary: 0,
    age: 0
  };
  handleChange = event => {
    this.setState({
      employee_name: event.target.value,
      employee_salary: event.target.value,
      employee_age: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const details = {
      name: this.state.employee_name,
      salary: this.state.employee_salary,
      age: this.state.employee_age
    };
    axios
      .post(`http://dummy.restapiexample.com/api/v1/create`, { details })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    return (
      <form id='msform' onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type='text'
            name='employee_name'
            onChange={this.handleChange}
          />
        </label>
        <label>
          Salary
          <input
            type='number'
            name='employee_salary'
            onChange={this.handleChange}
          />
        </label>
        <label>
          Age
          <input
            type='number'
            name='employee_age'
            onChange={this.handleChange}
          />
        </label>
        <button className='action-button' type='submit'>
          ADD EMPLOYEE
        </button>
      </form>
    );
  }
}

export default AddEmployee;

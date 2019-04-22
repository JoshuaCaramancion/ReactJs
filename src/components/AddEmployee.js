import React, { Component } from 'react';
import axios from 'axios';

class AddEmployee extends Component {
  state = {
    name: '',
    salary: 0,
    age: 0
  };
  //   handleChange = event => {
  //     this.setState({
  //       employee_name: event.target.value,
  //       employee_salary: event.target.value,
  //       employee_age: event.target.value
  //     });
  //   };

  handleSubmit = event => {
    event.preventDefault();

    const details = {
      name: 'abakada',
      salary: 1212,
      age: 11
    };
    axios
      .post(`http://dummy.restapiexample.com/api/v1/create`, details)
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
            type='text'
            name='employee_name'
            placeholder='Employee Name'
            onChange={this.handleChange}
          />
          <input
            type='number'
            name='employee_salary'
            placeholder='Employee Salary'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='employee_name'
            placeholder='Employee Age'
            onChange={this.handleChange}
          />
          <button className='action-button' type='submit'>
            ADD EMPLOYEE
          </button>
        </form>
      </div>
    );
  }
}

export default AddEmployee;

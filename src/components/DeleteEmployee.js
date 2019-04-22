import React, { Component } from 'react';
import axios from 'axios';

class DeleteEmployee extends Component {
  state = {
    id: 0
  };
  handleChange = event => {
    this.setState({
      id: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete(`http://dummy.restapiexample.com/api/v1/delete/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    return (
      <button onSubmit={this.handleSubmit} type='submit'>
        Delete
      </button>
    );
  }
}

export default DeleteEmployee;

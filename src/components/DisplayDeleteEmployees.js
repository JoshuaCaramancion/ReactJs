import React, { Component } from 'react';
import axios from 'axios';
// import DeleteEmployee from './DeleteEmployee';

class DisplayEmployees extends Component {
  state = {
    items: [],
    isLoaded: false
  };

  componentDidMount() {
    axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res => {
      console.log(res);
      this.setState({
        items: res.data
      });
      console.log(res);
    });
  }

  deleteEmployee(id) {
    try {
      axios({
        method: 'delete',
        url: `http://dummy.restapiexample.com/api/v1/delete/${id}`
      }).then(response => {
        console.log(response);
        console.log(response.data);
        window.location.reload();
      });
    } catch (err) {
      console.log('Error on deleting employee');
      console.log(err);
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map(item => (
            <tr key={item.id}>
              <td>{item.id} </td>
              <td>{item.employee_name} </td>
              <td>{item.employee_salary} </td>
              <td>{item.employee_age} </td>
              <td>
                <button>Edit</button>&nbsp;
                <button
                  className='action-button'
                  onClick={() => {
                    this.deleteEmployee(item.id);
                    alert('Item Deleted');
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default DisplayEmployees;

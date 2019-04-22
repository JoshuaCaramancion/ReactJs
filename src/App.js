import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DisplayDeleteEmployees from './components/DisplayDeleteEmployees';
import AddEmployee from './components/AddEmployee';
// import DeleteEmployee from './components/DeleteEmployee';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <center>
            <Link to='/'>Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/addEmployee'>Add Employee</Link>
          </center>
          <Route path='/addEmployee' component={AddEmployee} />
          <Route path='/' exact component={DisplayDeleteEmployees} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

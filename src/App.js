import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DisplayDeleteEmployees from './components/DisplayDeleteEmployees';
import AddEmployee from './components/AddEmployee';
// import DeleteEmployee from './components/DeleteEmployee';

class App extends Component {
  render() {
    return (
      <header className='header'>
        <BrowserRouter>
          <Link to='/'>Home</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/addEmployee'>Add Employee</Link>
          <Route path='/addEmployee' component={AddEmployee} />
          <Route path='/' exact component={DisplayDeleteEmployees} />
        </BrowserRouter>
      </header>
    );
  }
}

export default App;

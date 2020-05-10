import React, { Component } from "react";
import UserInfoAPI from './utils/UserInfoAPI'
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Table from "./components/Table/Table"

class App extends Component {
  constructor() {
    super()
    this.state = {
      employees: [],
      filteredEmployees: [],
      search: "",
      currentSort: 'asc'
    }
  }

  componentDidMount() {
    UserInfoAPI.searchAll()
      .then(res => this.setState({
        employees: res.data.results,
      }))
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Table />
      </div>
    );
  }
}

export default App;

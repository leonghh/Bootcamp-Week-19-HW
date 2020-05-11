import React, { Component } from "react";
import axios from "axios";
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Table from "./components/Table/Table"

class App extends Component {

  constructor() {
    super();
    this.state = {
      employees: [],
      filteredEmployees: [],
      search: "",
      sort: "asc",
    }
  }

  updateSearch = event => {
    this.setState({ search: event.target.value }, () => this.handleFilter());
  }

  handleFilter = () => {
    let filteredEmployees = this.state.employees.filter((employee) => {
        let fullName = (employee.name.first + " " + employee.name.last).toLowerCase();
        return (fullName.includes(this.state.search.toLowerCase()));
    })
    this.setState({ filteredEmployees: filteredEmployees })
}

  

  componentDidMount() {
    const url = "https://randomuser.me/api/?results=100";
    axios.get(url)
      .then(res => {
        this.setState({
          employees: res.data.results,
          employeesData: res.data.results,
        });
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div className="App">
        <Navbar 
          value = {this.state.search}
          onChange = {this.updateSearch.bind(this)}
        />
        <Table 
          employees={this.state.filteredEmployees}
        />
      </div>
    );
  }
}

export default App;

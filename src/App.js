import React, { Component } from "react";
import axios from "axios";
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Table from "./components/Table/Table"

class App extends Component {

  state = {
      employees: [],
      employeesData: [],
      search: "",
      sortNameAsc: true,
      sortEmailAsc: true,
      sortPhoneAsc: true,
      sortDOBAsc: true
    }

  componentDidMount() {
    const url = "https://randomuser.me/api/?results=50";
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
        <Navbar />
        <Table 
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class EmployeeInfo extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td scope="row" id={this.props.id}>1</td>
                    <td><img alt={this.state.employees.name.first + this.state.employees.name.first} src={this.state.employees.src.medium} /></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        )
    }
}

export default EmployeeInfo;
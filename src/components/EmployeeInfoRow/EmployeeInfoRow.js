import React from 'react';

function EmployeeInfoRow(props) {
    var d = new Date(props.dob.date);
    var formatted_date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear()

    return (
        <tr>
            <td><img src={props.picture} alt="employee" /></td>
            <td>{props.name.first} {props.name.last}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{formatted_date}</td>
        </tr>
    )
}


export default EmployeeInfoRow;
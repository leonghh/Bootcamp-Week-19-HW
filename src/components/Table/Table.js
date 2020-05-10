import React from 'react';
import EmployeeInfoRow from "../EmployeeInfoRow/EmployeeInfoRow"

function Table(props) {
    return (
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name <i class="fas fa-sort"></i></th>
                        <th scope="col">Email <i class="fas fa-sort"></i></th>
                        <th scope="col">Phone <i class="fas fa-sort"></i></th>
                        <th scope="col">DOB <i class="fas fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employees => (
                        <EmployeeInfoRow
                            key={employees.login.uuid}
                            id={employees.login.uuid}
                            picture={employees.picture.thumbnail}
                            name={employees.name}
                            email={employees.email}
                            phone={employees.cell}
                            dob={employees.dob}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
import React, { Component } from 'react';
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo"

class Table extends Component {
    render() {
        return (
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col" data-key="name">Name <i class="fas fa-sort"></i></th>
                            <th scope="col" data-key="phone">Phone <i class="fas fa-sort"></i></th>
                            <th scope="col" data-key="email">Email <i class="fas fa-sort"></i></th>
                            <th scope="col" data-key="dob">DOB <i class="fas fa-sort"></i></th>
                        </tr>
                    </thead>

                    {/* <EmployeeInfo /> */}
                </table>
            </div>
        );
    }
}

export default Table;
import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Employee Directory</span>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}

export default Navbar;
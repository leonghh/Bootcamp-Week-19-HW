import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Employee Directory</span>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" 
                type="text" 
                placeholder="Search" 
                aria-label="Search"
                value={props.value}
                onChange={props.onChange} 
                />
            </form>
        </nav>
    )
}


export default Navbar;
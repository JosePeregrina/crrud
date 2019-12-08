import React from "react";
import {Link} from "react-router-dom";
function Header(){
    return(
        <header className="bg-secondary d-flex flex-row justify-content-around">
            <h1>Header component</h1>
            <Link to="/AddProduct">
                <h2>Add Product</h2>
            </Link>
        </header>
    )
}
export default Header;
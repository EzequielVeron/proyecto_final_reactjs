import React from "react";
import CartWidget from "../CartWidget";
import NavLink  from "react-router-dom";

export const NavBar = () =>{
    return(
        <div className="container">
            <nav className="nav">
                <div>
                    <NavLink className="nav__link" to="/" >Tienda de dulce</NavLink>
                </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav__link" to="producto">producto 1 </NavLink>
                    </li>
                    
                    <li>
                        <NavLink className="nav__link" to="cart"><CartWidget/></NavLink>
                    </li>

                </ul>

            </nav>

        </div>
    );

}



export default NavBar
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/today"> Today </NavLink>
            <NavLink to="/add"> Add </NavLink>
            <NavLink to="/days"> Past Days </NavLink>
        </nav>
    );
}

export default NavBar;
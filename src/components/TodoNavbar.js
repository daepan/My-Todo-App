import React, { useState } from "react";
import { Link } from 'react-router-dom';
const TodoNavbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="TodoNavbar">
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/Game" className="nav-link" onClick={() => setOpen(false)}>
                        TodoGame
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default TodoNavbar;
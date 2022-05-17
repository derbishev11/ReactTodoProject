import React from "react";
import { FaTasks } from 'react-icons/fa';
import './Header.scss';

class Header extends React.Component{
    render() {
        return (
            <header>
                <div className="title"><FaTasks className="fa-icon"/> Todo App</div>
                <div className="author">By Temirlan Derbishev</div>
            </header>
        );
    }

}

export default Header
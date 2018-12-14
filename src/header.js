import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <nav>
                        <ul className="navigation">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Approch</a></li>
                            <li><a href="#">Our Work</a></li>
                            <li><a href="#">Our Partners</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Articles</a></li>
                            <li><a href="#">Our Contacts</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;
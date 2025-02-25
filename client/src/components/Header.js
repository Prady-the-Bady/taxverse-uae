import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Welcome to TaxVerse UAE</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

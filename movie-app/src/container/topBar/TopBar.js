import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchBar from '../../component/searchBar/SearchBar'
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="TopBarContainer">
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="#">OMDB Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <SearchBar/>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TopBar;

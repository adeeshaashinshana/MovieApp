import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="SearchBarContainer">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    );
}

export default SearchBar;

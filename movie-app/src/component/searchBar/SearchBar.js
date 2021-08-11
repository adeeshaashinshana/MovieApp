import React, { useState } from "react";
import { Form, FormControl, Button } from 'react-bootstrap';

import './SearchBar.css';

const SearchBar = (props) => {

    const [searchText, setSearchText] = useState('');

    return (
        <div className="SearchBarContainer">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={event => setSearchText(event.target.value)}
                />
                <Button variant="outline-success" onClick={() => props.setSearchValue(searchText)}>Search</Button>
            </Form>
        </div>
    );
}

export default SearchBar;

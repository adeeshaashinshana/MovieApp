import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from 'react-bootstrap';
import API_KEY from '../../api/apiKey'
import './SearchBar.css';

const SearchBar = () => {

    
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('tt3896198');
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);

  useEffect(() => {

    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?i=${query}&apikey=${API_KEY}`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
        if (response.Response === 'False') {
          setError(response.Error);
        }
        else {
          setData(response.Search);
        }

        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      })

  }, [query]);

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

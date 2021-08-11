import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from 'react-bootstrap';
import API_KEY from '../../api/apiKey'
import './SearchBar.css';

const SearchBar = () => {


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    //   const [loading, setLoading] = useState(false);
    // const [query, setQuery] = useState('tt3896198');
    const [query, setQuery] = useState('cat');
    //   const [activateModal, setActivateModal] = useState(false);
    //   const [showDetail, setShowDetail] = useState(false);
    //   const [detailRequest, setDetailRequest] = useState(false);

    var filmData;

    //   useEffect(() => {

    // setLoading(true);
    // setError(null);
    // setData(null);

    // fetch(`http://www.omdbapi.com/?i=${query}&apikey=${API_KEY}`)
    //   .then(resp => resp)
    //   .then(resp => resp.json())
    //   .then(response => {
    //     if (response.Response === 'False') {
    //       setError(response.Error);
    //     }
    //     else {
    //       setData(response.Search);
    //     }

    //     setLoading(false);
    //   })
    //   .catch(({ message }) => {
    //     setError(message);
    //     setLoading(false);
    //   })

    //   }, [query]);

    function onButtonClick(event) {
        event.preventDefault();
        console.log("search text :", query);

        // setLoading(true);
        setError(null);
        setData(null);

        fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
            .then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                if (response.Response === 'False') {
                    setError(response.Error);
                    console.log("err1>>>", error);
                }
                else {
                    setData(response.Search);
                    console.log("data>>>", data);
                    filmData = data;
                }

                // setLoading(false);
            })
            .catch(({ message }) => {
                setError(message);
                console.log("err2>>>", error);
                // setLoading(false);
            })
    }

    return (
        <div className="SearchBarContainer">
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={e => setQuery(e.target.value)}
                />
                <Button variant="outline-success" onClick={onButtonClick}>Search</Button>
            </Form>
        </div>
    );
}

export default SearchBar;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import API_KEY from '../../api/apiKey';
import TopBar from '../topBar/TopBar';
import CardHolder from '../cardHolder/CardHolder'
import AlertBox from '../../component/alertBox/AlertBox';
import './LandingPage.css';

const LandingPage = () => {

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const API_URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

    const response = await fetch(API_URL);

    if (!response.ok) {
      alert("HTTP-Error: " + response.status);
    } else {
      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        console.log('fuck');
        // return (
        //   <AlertBox alert="Movie not Found!" />
        // )
      }
    }
  };

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

return (
  <div className="LandingPageContainer">
    <TopBar searchValue={searchValue} setSearchValue={setSearchValue} />
    <CardHolder movies={movies} />
  </div>
);
}

export default LandingPage;

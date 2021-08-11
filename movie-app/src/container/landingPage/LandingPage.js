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
  const [findError, setFindError] = useState(false);

  const getMovieRequest = async (searchValue) => {
    const API_URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

    const response = await fetch(API_URL);

    if (!response.ok) {
      alert("HTTP-Error: " + response.status);
    } else {
      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
        setFindError(false);
      } else {
        setFindError(true);
      }
    }
  };

  useEffect(() => {
    if (searchValue !== '') {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  return (
    <div className="LandingPageContainer">
      <TopBar searchValue={searchValue} setSearchValue={setSearchValue} />

      {searchValue === '' && movies.length === 0 &&
        <AlertBox
          alert="Welcome!"
          bgColor="rgba(192, 228, 241, 0.877)"
          borderColor="rgba(87, 132, 255, 0.877)"
          textColor="black" />
      }

      {findError === true ?
        (<AlertBox
          alert="Movie not Found!"
          bgColor="rgba(247, 151, 151, 0.61)"
          borderColor="rgba(219, 48, 48, 0.877)"
          textColor="red" />) :
        (<CardHolder movies={movies} />)
      }
    </div>
  );
}

export default LandingPage;

import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import MovieCard from '../../component/movieCard/MovieCard';
import './CardHolder.css';

const CardHolder = () => {
    return (
        <div className="CardHolderContainer">
            <MovieCard/>
        </div>
    );
}

export default CardHolder;

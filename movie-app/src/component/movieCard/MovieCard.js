import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import './MovieCard.css';

const MovieCard = ({
    poster,
    title,
    year
}) => {
    return (
        <div className="MovieCardContainer">
            <div className="cardImageContainer">
                <img src={poster} alt='movie' className="cardImage" />
            </div>
            <div className="cardTitleContainer">
                <h4 className="cardTitle">{title}</h4>
            </div>
            <div className="cardFooterContainer">
                <hr className="cardHorizontalLine" />
                <div className="d-flex justify-content-between footerItem">
                    <p className="movieYear">{year}</p>
                    <Button block className="infoButton" onClick={null}>
                        DETAILS
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;

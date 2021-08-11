import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from '../../component/movieCard/MovieCard';
import './CardHolder.css';

const CardHolder = (props) => {

    const renderMovieInfoCard = props.movies.map((movie, i) => (
        <Col sm={true} key={i} className="d-flex justify-content-center renderCardContainer">
            <MovieCard
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                plot={movie.Plot}
                actors={movie.Actors}
                // ratings={movie.Ratings.map(detail => {
                //     return <li> {detail.Source}</li>;
                // })}
                onBuyClicked={() => null}
            />
        </Col>
    ));

    return (
        <div className="CardHolderContainer">
            <Container>
                <Row className="d-flex justify-content-center">
                    {renderMovieInfoCard}
                </Row>
            </Container>
        </div>
    );
}

export default CardHolder;

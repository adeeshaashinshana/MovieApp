import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from '../../component/movieCard/MovieCard';
import './CardHolder.css';

const CardHolder = (props) => {

    const renderMovieInfoCard = props.movies.map((movie, i) => (
        <Col lg="5" key={i}>
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
                    {/* <Col lg="2"></Col> */}
                    {renderMovieInfoCard}
                    {/* <Col lg="2"></Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default CardHolder;

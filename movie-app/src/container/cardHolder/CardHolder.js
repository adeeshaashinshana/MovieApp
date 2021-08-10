import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from '../../component/movieCard/MovieCard';
import movieInfo from '../../api/movieInfo';
import './CardHolder.css';

const CardHolder = () => {

    const renderMovieInfoCard = movieInfo.map((details, i) => (
        <Col lg="5" key={i}>
            <MovieCard
                poster={details.poster}
                title={details.title}
                year={details.year}
                plot={details.plot}
                actors={details.actors}
                ratings={details.ratings.map(details => {
                    return <Col> {details} </Col>;
                })}
                onBuyClicked={() => null}
            />
        </Col>
    ));

    return (
        <div className="CardHolderContainer">
            <Container>
                <Row>
                    {/* <Col lg="2"></Col> */}
                    {renderMovieInfoCard}
                    {/* <Col lg="2"></Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default CardHolder;

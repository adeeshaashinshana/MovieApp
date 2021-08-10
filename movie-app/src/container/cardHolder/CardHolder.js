import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MovieCard from '../../component/movieCard/MovieCard';
import movieInfo from '../../api/movieInfo';
import './CardHolder.css';

const CardHolder = () => {

    const renderMovieInfoCard = movieInfo.map((details, i) => (
        <Col lg="4" key={i}>
            <MovieCard
                price={details.price}
                priceSub={details.priceSub}
                timeLimit={details.timeLimit}
                planName={details.planName}
                feats={details.features.map(details => {
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
                    <Col lg="12">
                        <h1 className="title">Make a better workplace today!</h1>
                        <p className="sub-title">
                            Choose a package which best suites your organization
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="2"></Col>
                    {renderMovieInfoCard}
                    <Col lg="2"></Col>
                </Row>
            </Container>
        </div>
    );
}

export default CardHolder;

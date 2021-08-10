import React from "react";
import { Card, Button } from "react-bootstrap";
import './MovieCard.css';

const MovieCard = ({
    poster,
    title,
    year,
    plot,
    actors,
    ratings
}) => {
    return (
        <Card className="MovieCardContainer">
            <Card.Body className="">
                <Card.Title className="">{poster}</Card.Title>
                <Card.Title className="">{title}</Card.Title>
                <Card.Text className="">{year}</Card.Text>
                <Card.Text className="">{plot}</Card.Text>
                <Card.Text className="">{actors}</Card.Text>
                <Card.Text className="">{ratings}</Card.Text>
                <Button block className="" onClick={null}>
                    Buy Now
                </Button>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;

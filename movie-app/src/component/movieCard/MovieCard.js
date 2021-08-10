import React from "react";
import { Card, Button } from "react-bootstrap";
import './MovieCard.css';

const MovieCard = ({
    price,
    priceSub,
    timeLimit,
    planName,
    feats,
    onBuyClicked
}) => {
    return (
        <div className="MovieCardContainer">
            <Card className="common-card-layout price-card-style">
                <Card.Body className="price-card-details">
                    <Card.Title className="price-style">{price}</Card.Title>
                    <Card.Title className="priceSub-style">{priceSub}</Card.Title>
                    <Card.Text className="timeLimit-style">{timeLimit}</Card.Text>
                    <Card.Text className="planName-style">{planName}</Card.Text>
                    <Card.Text className="feats-style">{feats}</Card.Text>
                    <Button block className="button-styles" onClick={onBuyClicked}>
                        Buy Now
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;

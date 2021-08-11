import React from "react";
import { Card } from "react-bootstrap";
import './AlertBox.css';

const AlertBox = (alert) => {
    return (
        <Card bg="Primary" className="mb-2">
            <Card.Body>
                <Card.Text>
                    {alert}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AlertBox;
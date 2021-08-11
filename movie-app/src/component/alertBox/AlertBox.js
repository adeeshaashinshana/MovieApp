import React from "react";
import { Row } from 'react-bootstrap';
import './AlertBox.css';

const AlertBox = (props) => {
    return (
        <Row className="d-flex justify-content-center">
            <div className="AlertBoxContainer" style={{
                backgroundColor: props.bgColor,
                borderColor: props.borderColor,
                color: props.textColor
            }}
            >
                {props.alert}
            </div>
        </Row>
    );
}

export default AlertBox;
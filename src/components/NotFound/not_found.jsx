import React from "react";
import {Row, Col, Card} from 'react-materialize'
import deadLink from '../../images/404.jpg'

const NotFound = () => (
    <Row>
        <Col m={12} s={12}>
            <h5 className="subtitle">
                Not Found
            </h5>
            <Card>
                <img src={deadLink} alt="" className={"responsive-img"} style={{display: "flex", justifyContent:"center", alignItems: "center"}}/>
            </Card>
        </Col>
    </Row>
)

export default NotFound
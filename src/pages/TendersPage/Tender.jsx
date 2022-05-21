import React, {useEffect, useState} from 'react';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

const Tender = ({id, name, location, cost}) => {
    return (

        <Card className={'mt-5'}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>

            <ListGroup className={'list-group-flush'}>
                <ListGroupItem>Локація: {location}</ListGroupItem>
                <ListGroupItem>Ціна: {cost}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={"/tenders/" + id}>Детальніше</Card.Link>
            </Card.Body>
        </Card>


    );
};

export default Tender;
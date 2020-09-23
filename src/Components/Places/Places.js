import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import places from '../FakeData/Places';

const Places = () => {
    return (
        <div>
            {/* Cards with the picture of places in home page */}
            <CardDeck >
                <Card style={{ borderRadius: '14px', textAlign: 'center' }}>
                    <Card.Img variant="top" src={places[0].image} />

                    <Card.Body>
                        <Card.Title>{places[0].name}</Card.Title>
                    </Card.Body>
                    <Link to={`/place/${places[0].name}/${places[0].description}`}><Button variant="warning">Book Now</Button></Link>

                </Card>
                <Card style={{ borderRadius: '14px', textAlign: 'center' }}>
                    <Card.Img variant="top" src={places[1].image} />
                    <Card.Body>
                        <Card.Title>{places[1].name}</Card.Title>

                    </Card.Body>
                    <Link to={`/place/${places[1].name}/${places[1].description}`}><Button variant="warning">Book Now</Button></Link>

                </Card>
                <Card style={{ borderRadius: '14px', textAlign: 'center' }}>
                    <Card.Img variant="top" src={places[2].image} />
                    <Card.Body>
                        <Card.Title>{places[2].name}</Card.Title>
                    </Card.Body>
                    <Link to={`/place/${places[2].name}/${places[2].description}`}><Button variant="warning">Book Now</Button></Link>

                </Card>
            </CardDeck>
        </div>

    );
};

export default Places;
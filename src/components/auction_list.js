import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { CardGroup, ListGroup, Button, Card } from 'react-bootstrap';


const Auction = (props) => (
    <div >
        <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Theme: {props.theme}</ListGroup.Item>
                <ListGroup.Item>Ages: {props.age}+</ListGroup.Item>
                <ListGroup.Item>Pieces: {props.pieces}</ListGroup.Item>
                <ListGroup.Item>Item #: {props.item_number}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant="primary">Place Bid</Button>
            </Card.Body>
        </Card>
    </div>


);

export default function AuctionList() {
    const [auctions, setAutionList] = useState([]);
    const [inputVal, setVal] = useState('');


    //let url = 'http://localhost:5000/api/?q=';
    let url = 'https://project-fs-backend.vercel.app/api?q=';
    useEffect(() => {
        axios
            .get(url + inputVal)
            .then((response) => {
                setAutionList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [inputVal]);

    function onInputChange(evt) {
        setVal(evt.target.value);
        console.log({inputVal});
      }

    return (
        <div >
            <Navbar />

            <div style={{ padding: '1rem' }}>
                <h3>Current Lego Auctions</h3>
                <input type="text" placeholder="Search..." value={inputVal} onChange={onInputChange} />
                <CardGroup style={{ padding: '2rem' }}>
                    {auctions.map((auction) => {
                        return (
                            <Auction
                                key={auction._id}
                                name={auction.name}
                                theme={auction.theme}
                                description={auction.description}
                                age={auction.age}
                                pieces={auction.pieces}
                                item_number={auction.item_number}
                                image={auction.image}
                            />
                        )
                    })}
                </CardGroup>
            </div>
        </div>
    );
}
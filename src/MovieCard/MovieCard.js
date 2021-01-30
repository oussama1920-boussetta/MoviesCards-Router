import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from "../Rating/Rating";
import { Link } from 'react-router-dom';




export const RunCrd = ({ movie: { titre, image, synopsis, rating ,id} }) => {

    return (


        <Card style={{ width: '18rem' }} className='Card' >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{titre}</Card.Title>
                <Card.Text>
                    {synopsis}
                </Card.Text>
                <Link to={`/Trailer/${id}`}>
                    <button >Trailer</button>
                </Link>
            </Card.Body>
            <Rating rating={rating} />


        </Card>
    )
}


import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Modal } from "react-bootstrap";


const Add = ({ AddNewMovie }) => {
    const [newMovie, setNewMovie] = useState({
        titre: "",
        rating: "",
        synopsis: "",
        image: "",
    });
    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='Modal'>
            <Button variant="primary" onClick={handleShow}>
                ADD FILM
        </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD FILM</Modal.Title>
                </Modal.Header>
                <Modal.Body className='Add'>
                    <div className='AddTitre'>
                        <label> Nom:</label>
                        <input type="text" name="titre"className='nom' onChange={handleChange} required /><br></br></div>
                    <div className='AddRating'>
                        <label> Rate:</label>
                        <input type="text" name="rating"className='rate' onChange={handleChange} required /><br></br></div>

                    <div className='AddImage'>
                        <label> Image:</label>
                        <input type="url" name="image"className='image' onChange={handleChange} required /><br></br></div>
                    <div className='Addsynopsis'>  
                        <label> synopsis:</label>
                        <input type="text" name="synopsis"className='synopsis' onChange={handleChange} required /></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={() => {
                        AddNewMovie(newMovie);
                        handleClose()
                    }}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Add 






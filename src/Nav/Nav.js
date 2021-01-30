import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Rate from '../Rating/Rating'




export const NavBar = ({ setMyRate, myRate }) => {
    return (
        <div className='bar'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div>
                    <Navbar.Brand href="#Movies-Cards">Movies Cards</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div>
                        <Nav className="mr-auto">
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link >Movies</Nav.Link>
                            <Nav.Link >Serie</Nav.Link>
                            <div>
                                <div className="search-container">
                                    <Rate rating={myRate} setMyRate={setMyRate} />
                                </div>
                            </div>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

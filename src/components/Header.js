import React from 'react'
import '../styles/Header.css'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FormPopUp } from '../components/FormPopUp'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

export const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <div className="d-flex flex-column flex-md-row bg-white header">
                <h4 className="mr-md-auto logo">
                    <img src={logo} alt="logo" /> 
                    <a href="/" > <strong className="pimp-studio"> Studio Zerance. </strong></a>
                </h4>
                <nav className="btn-group">
                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="menu-item"
                > Nos Clients </Link> 
                <Link
                    activeClass="active"
                    to="Slider"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="menu-item"
                > Nos Offres </Link>                    
                <Link
                    activeClass="active"
                    to="sliding-text"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="menu-item"
                > Le Studio </Link> 
                    <a href="#" className="menu-item" onClick={handleShow}> Contact </a>
                </nav>
     
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bonjour !</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <FormPopUp /> </Modal.Body>
                        <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

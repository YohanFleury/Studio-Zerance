import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



export const HelloPopUp = (props) => {
    
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body> {props.reponse} </Modal.Body>
                <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Fermer
            </Button>
            </Modal.Footer>
        </Modal>
        )
}

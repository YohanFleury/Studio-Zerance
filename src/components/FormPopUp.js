import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { HelloPopUp } from './HelloPopUp'


export const FormPopUp = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [name, setName] = useState("")

    // Valeur qui sera utilisée dans la 2eme Pop Up
    const [reponse, setReponse] = useState("")

   
    //2eme Pop UP
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    const handleSubmit = e => {
        e.preventDefault()

        message.length === 0 || email.length ===0 || name.length === 0 ? 
        alert("Veuillez renseigner tous les champs")

        : fetch(`https://api.genderize.io/?name=${name}`)
            .then(response => response.json())
            .then(data => {
            if (data.gender === "male") {
                setReponse("Rosebud")
            } else if (data.gender === "female") {
                setReponse("We rob banks")
            } else {
                setReponse("It's a trap !")
            }
            setShow(true)
        })
    }
    return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" value={email} onInput={e => setEmail(e.target.value)} placeholder="Entrez votre email" id="toto" />
            </Form.Group>
            <Form.Group>
            <Form.Label> Prénom </Form.Label>
            <Form.Control type="text" value={name} placeholder="Saisissez votre prénom" onInput={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label> Ecrivez votre message </Form.Label>
                <Form.Control as="textarea" rows={3} value={message} onInput={e => setMessage(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit"> Valider </Button>
        </Form>
        {}
        <HelloPopUp show={show} handleClose={handleClose} reponse={reponse} />
    </>
    )
}

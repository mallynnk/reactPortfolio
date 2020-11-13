import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Card from 'react-bootstrap/Card'

function Contact() {

    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {

    //     if (e.target.name === 'email') {

    //         const isValid = validateEmail(e.target.value);

    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {

    //             if (!e.target.value.length) {
    //                 setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //                 setErrorMessage('');
    //             }
    //         }

    //     }

    //     console.log('errorMessage', errorMessage);

    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //     }

    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }


    var style = {
        fontSize: "4rem",
        textAlign: "center",
        fontWeight: 100
    }

    return (
        <div style={{padding: '20rem'}} className="contact">
        <h1 style={style}>get in touch</h1>
        <Card style={{color: '#5E7364', padding:'5rem', width: '18rem ', textAlign: 'center', alignItems: 'center', display:'contents'}}>  
            <Card.Body> 
            {/* <Card.Title style={{fontSize:'3rem'}} >Contact Information</Card.Title> */}
            <Card.Text style={{fontSize:'2rem'}} > 
             Phone: <a href="tel:6155555555">(330) 631 3168</a>
            </Card.Text>
            <Card.Text style={{fontSize:'2rem'}} >
              Email: <a href="mailto:roysterss@gmail.com">mallory.willeke@gmail.com</a>
            </Card.Text>
            <Card.Link style={{fontSize:'2rem'}} href="https://github.com/mallynnk">GitHub</Card.Link>
            <Card.Link style={{fontSize:'2rem'}} href="https://www.linkedin.com/in/mallory-korpics-087218170/">LinkedIn</Card.Link>
            </Card.Body>
        </Card>
        </div>
    );

}

export default Contact;
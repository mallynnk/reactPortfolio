import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Card from 'react-bootstrap/Card'

function Contact() {

    var style = {
        fontSize: "4rem",
        textAlign: "center",
        fontWeight: 100
    }

    return (
        <div className="contact">
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
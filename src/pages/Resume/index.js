import React from 'react';
import Hero from '../../components/Hero'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Resume() {

    return (
        <Container id="resume">
            <Row className="justify-content-md-center" >
            Download my full <a href="https://github.com/mallynnk/reactportfolio/raw/master/src/assets/Resume_Willeke.pdf" class="link">resume</a>
            </Row>
        </Container>
    );

}

export default Resume;
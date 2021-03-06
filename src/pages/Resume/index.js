import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

var style = {
    fontSize: "4rem",
    padding: "3rem",
    textAlign: "center",
    fontWeight: 1
}

function Resume() {

    return (
        <Container id="resume">
            <Row style={style} className="justify-content-md-center" >
            download my full <a href="https://github.com/mallynnk/reactportfolio/raw/master/src/assets/Resume_Willeke.pdf" class="link">  resume</a>
            </Row>
        </Container>
    );

}

export default Resume;
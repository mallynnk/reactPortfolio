import React from 'react';

var style = {
    textAlign: "center",
    padding: "3rem",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%",
}

function Footer() {
    return (
        <footer style={style}>
            <p className="">    
                <a className="btn btn-outline-dark btn-social mx-1" 
                    href="https://github.com/mallynnk">
                        <i className="fab fa-fw fa-github fa-lg" style={{background:"SkyBlue"}}></i></a>
            </p>
            <h4>I look forward to hearing from you</h4>
            <p>Copyright © Mallory Willeke 2020</p>
        </footer>
    )
}

export default Footer;
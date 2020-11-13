import React from 'react';
import Carousel from '../../components/Carousel'

var style = {
  fontSize: "4rem",
  padding: "3rem",
  textAlign: "center",
  fontWeight: 100
}

function Portfolio() {

  
    return (
      <div>
        <h1 style={style}>Portfolio</h1>
        <div className="Restcontainer">

        <div>
        <Carousel></Carousel>
        </div>
        </div>
        </div>
    );
  }
  
export default Portfolio;


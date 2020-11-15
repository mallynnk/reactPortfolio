import React from 'react';
import Carousel from '../../components/Carousel'
import BackCarousel from '../../components/BackCarousel'
import FullCarousel from '../../components/FullCarousel'

var style = {
  fontSize: "4rem",
  textAlign: "center",
  fontWeight: 100
}

function Portfolio() {

  
    return (
      <div>
        <h1 style={style}>Portfolio</h1>
        <div className="Restcontainer">
        <div>
        <h2 style={{textAlign: 'center', fontStyle: 'Italic', fontWeight: 'bold', padding: '1rem'}}>Full Stack Work</h2>
        <FullCarousel></FullCarousel>
        <h2 style={{textAlign: 'center', fontStyle: 'Italic', fontWeight: 'bold', padding: '1rem'}}>Front End Work</h2>
        <Carousel></Carousel>
        <h2 style={{textAlign: 'center', fontStyle: 'Italic', fontWeight: 'bold', padding: '1rem'}}>Back End Work</h2>
        <BackCarousel></BackCarousel>
       
        </div>
        </div>
        </div>
    );
  }
  
export default Portfolio;


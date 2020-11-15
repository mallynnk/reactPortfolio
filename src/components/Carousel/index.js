import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import front0 from '../../assets/img/PortfolioImages/front0.png'
import front1 from '../../assets/img/PortfolioImages/front1.png'
import front2 from '../../assets/img/PortfolioImages/front2.png'
import front3 from '../../assets/img/PortfolioImages/front3.png'

var style = {
  fontSize: "4rem",
  padding: "20px",
  textAlign: "center",
  fontWeight: 100
}


function AppCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  return (

      <Carousel activeIndex={index} onSelect={handleSelect} interval={1000000000} className="flex-row">
          <Carousel.Item>
          <img 
          className="d-block w-100" src={front0} alt="First Slide"/>
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Horiseon</h4>
            <h4><a href="https://github.com/mallynnk/Horiseon-Refactor">Repository</a></h4>
            <h4><a href='https://mallynnk.github.io/Horiseon-Refactor/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <img className="d-block w-100" src={front1} alt="Second Slide"/>
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Code Quiz</h4>
            <p style={{textAlign: 'center'}}>an easy JavaScript knowledge quiz built with HMTL, CSS and JavaScript</p>
            <h4><a href="https://github.com/mallynnk/code-quiz">Repository</a></h4>
            <h4><a href='https://mallynnk.github.io/code-quiz/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
      
          <img className="d-block w-100" src={front2} alt="Third Slide"/>
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Work Day Scheduler</h4>
             <p style={{textAlign: 'center'}}>an app for planning out your schedule for the work day</p>
            <h4><a href="https://github.com/mallynnk/daily-schedule">Repository</a></h4>
            <h4><a href='https://mallynnk.github.io/daily-schedule/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <img className="d-block w-100" src={front3} alt="Fourth Slide"/>
        <Carousel.Caption>
        <h4 style={{textAlign: 'center'}}>Weather Dashboard</h4>
          <p style={{textAlign: 'center'}}>a weather app using weather forecast information</p>
            <h4><a href="https://github.com/mallynnk/weather-dashboard">Repository</a></h4>
            <h4><a href='https://mallynnk.github.io/weather-dashboard/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
      </Carousel>
  );
};

export default AppCarousel;
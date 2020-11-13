import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import back0 from '../../assets/img/PortfolioImages/back0.png'
import back1 from '../../assets/img/PortfolioImages/back1.png'
import back2 from '../../assets/img/PortfolioImages/back2.png'
import back3 from '../../assets/img/PortfolioImages/back3.png'
import back4 from '../../assets/img/PortfolioImages/back4.png'


var style = {
  fontSize: "4rem",
  padding: "20px",
  textAlign: "center",
  fontWeight: 100
}


function BackCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  

  return (

      <Carousel activeIndex={index} onSelect={handleSelect} className="flex-row">
          <Carousel.Item>
          <img 
          className="d-block w-100" src={back0} alt="First Slide"/>
        <Carousel.Caption>
            <h2 style={{fontStyle: 'italic'}}>back end</h2>
            <p>a Node.js app for generating a markdown readme page</p>
            <h4><a href="https://github.com/mallynnk/readme-generator">Repository</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <img className="d-block w-100" src={back1} alt="Second Slide"/>
        <Carousel.Caption>
            <h2 style={{fontStyle: 'italic'}}>back end</h2>
            <p>a Node.js build app to generate an HTML page of team members with team roles and other data</p>
            <h4><a href="https://github.com/mallynnk/team-profile-gen">Repository</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <img className="d-block w-100" src={back2} alt="Third Slide"/>
        <Carousel.Caption>
            <h2 style={{fontStyle: 'italic'}}>back end</h2>
            <p>a note taking program in which my role was to focus on the back end build</p>
            <h4><a href="https://github.com/mallynnk/note-taker">Repository</a></h4>
            <h4><a href='https://enigmatic-refuge-44915.herokuapp.com'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <img className="d-block w-100" src={back3} alt="Fourth Slide"/>
        <Carousel.Caption>
            <h2 style={{fontStyle: 'italic'}}>back end</h2>
            <p>a Node.js app using Inquirer to gather user input and Express.js to serve data, while performing CRUD operations on a MySQL Database to store employee information</p>
            <h4><a href="https://github.com/mallynnk/employee-tracker">Repository</a></h4>
            <h4><a href='https://drive.google.com/file/d/1Llt9LVLoX5ApCDHZGfiVDHhXzJCOLpMz/viewhttps://drive.google.com/file/d/1Llt9LVLoX5ApCDHZGfiVDHhXzJCOLpMz/view'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <img className="d-block w-100" src={back3} alt="Fourth Slide"/>
        <Carousel.Caption>
            <h2 style={{fontStyle: 'italic'}}>back end</h2>
            <p>a Node.js app that uses Express.js to serve data while using sequelize to perform CRUD operations on a MySQL database for an E-Commerce Site</p>
            <h4><a href="https://github.com/mallynnk/ecommerce">Repository</a></h4>
            <h4><a href='https://drive.google.com/file/d/1W3AFtCMbJIAg9U1fbBHit2KkRCYbJaur/view'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
      </Carousel>
  );
};

export default BackCarousel;
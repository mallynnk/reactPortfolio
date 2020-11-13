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


  //   {
  //     name: 'Readme Generator',
  //     category: 'back',
  //     description: 'A Node.js app for generating a markdown readme page',
  //     GitHub: 'https://github.com/mallynnk/readme-generator',
  //     site:'NA',
  //   },
  //   {
  //     name: 'Team Profile Generator',
  //     category: 'back',
  //     description: 'A Node.js build app to generate an HTML page of team members with team roles and other data',
  //     GitHub: 'https://github.com/mallynnk/team-profile-gen',
  //     site:'NA',
  //   },
  //   {
  //     name: 'Note Taker',
  //     category: 'back',
  //     description: 'A note taking program in which my role was to focus on the back end build',
  //     GitHub: 'https://github.com/mallynnk/note-taker',
  //     site:'https://enigmatic-refuge-44915.herokuapp.com',
  //   },
  //   {
  //     name: 'Employee Tracker',
  //     category: 'back',
  //     description: 'A Node.js app using Inquirer to gather user input and Express.js to serve data, while performing CRUD operations on a MySQL Database to store employee information',
  //     GitHub: 'https://github.com/mallynnk/employee-tracker',
  //     site:'https://drive.google.com/file/d/1Llt9LVLoX5ApCDHZGfiVDHhXzJCOLpMz/viewhttps://drive.google.com/file/d/1Llt9LVLoX5ApCDHZGfiVDHhXzJCOLpMz/view',
  //   },
  //   {
  //     name: 'E-Commerce Back End',
  //     category: 'back',
  //     description: 'A Node.js app that uses Express.js to serve data while using sequelize to perform CRUD operations on a MySQL database for an E-Commerce Site',
  //     GitHub: 'https://github.com/mallynnk/ecommerce',
  //     site:'https://drive.google.com/file/d/1W3AFtCMbJIAg9U1fbBHit2KkRCYbJaur/view',
  //   },
  //   {
  //     name: 'Tech Blog',
  //     category: 'full',
  //     description: 'A CMS style Tech-Blog used to solidify the concepts of ORM (Object-Relational Mapping) and MVC (Model-View-Control)',
  //     GitHub: 'https://github.com/mallynnk/tech-blog',
  //     site:'https://glacial-lowlands-59045.herokuapp.com',
  //   },
  //   {
  //     name: 'Ask Father Time',
  //     category: 'full',
  //     description: '',
  //     GitHub: 'https://github.com/nosremetnarg/askFatherTime',
  //     site:'https://mighty-meadow-10557.herokuapp.com/',
  //   },
  //   {
  //     name: 'News by the Map',
  //     category: 'full',
  //     description: '',
  //     GitHub: 'https://github.com/adamkeyser45/newsbythemap',
  //     site:'https://adamkeyser45.github.io/newsbythemap/',
  //   },
  //   {
  //     name: 'Budget Tracker',
  //     category: 'full',
  //     description: 'A Progressive Web Application built from an already functioning front end app',
  //     GitHub: 'https://github.com/mallynnk/budget-tracker',
  //     site:'https://polar-inlet-39292.herokuapp.com/',
  //   },
  
  // ]);


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  return (

      <Carousel activeIndex={index} onSelect={handleSelect} className="flex-row">
          <Carousel.Item>
          <h2 style={{fontStyle: 'italic', textAlign: 'center'}}>Horiseon</h2>
          <img 
          className="d-block w-100" src={front0} alt="First Slide"/>
        <Carousel.Caption>
            <h4><a href="https://github.com/mallynnk/Horiseon-Refactor">Repository</a></h4>
            <h4><a href='https://mallynnk.github.io/Horiseon-Refactor/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
         <h2 style={{fontStyle: 'italic', textAlign: 'center'}}>Code Quiz</h2>
          <img className="d-block w-100" src={front1} alt="Second Slide"/>
        <Carousel.Caption>
            <p>an easy JavaScript knowledge quiz built with HMTL, CSS and JavaScript</p>
            <h4><a href="https://github.com/mallynnk/code-quiz">Repository</a></h4>
            <h4><a href='https://mallynnk.github.io/code-quiz/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
         <h2 style={{fontStyle: 'italic', textAlign: 'center'}}>Work Day Scheduler</h2>
          <img className="d-block w-100" src={front2} alt="Third Slide"/>
        <Carousel.Caption>
            <p>an app for planning out your schedule for the work day</p>
            <h4><a href="https://github.com/mallynnk/daily-schedule">Repository</a></h4>
            <h4><a href='https://mallynnk.github.io/daily-schedule/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <h2 style={{fontStyle: 'italic', textAlign: 'center'}}>Weather Dashboard</h2>
          <img className="d-block w-100" src={front3} alt="Fourth Slide"/>
        <Carousel.Caption>
            <p>a weather app using weather forecast information</p>
            <h4><a href="https://github.com/mallynnk/weather-dashboard">Repository</a></h4>
            <h4><a href='https://mallynnk.github.io/weather-dashboard/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
      </Carousel>
  );
};

export default AppCarousel;
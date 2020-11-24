import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import full0 from '../../assets/img/PortfolioImages/full0.png'
import full1 from '../../assets/img/PortfolioImages/full1.png'
import full2 from '../../assets/img/PortfolioImages/full2.png'
import full3 from '../../assets/img/PortfolioImages/full3.png'


var style = {
  fontSize: "4rem",
  padding: "20px",
  textAlign: "center",
  fontWeight: 100
}


function FullCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //     name: 'News by the Map',
  //     category: 'full',
  //     description: '',
  //     GitHub: ',
  //     site:'',
  //   },
  //   {
  //     name: 'Budget Tracker',
  //     category: 'full',
  //     description: 'A Progressive Web Application built from an already functioning front end app',
  //     GitHub: '',
  //     site:'',
  //   },
  
  

  return (

      <Carousel activeIndex={index} onSelect={handleSelect} interval={1000000000} className="flex-row">
        <Carousel.Item>
          <img className="d-block w-100" src={full1} alt="Second Slide"/>
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Ask Father Time</h4>
            <p>an advice column application</p>
            <h4><a href="https://github.com/nosremetnarg/askFatherTime'">Repository</a></h4>
            <h4><a href="https://mighty-meadow-10557.herokuapp.com/">Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
          <Carousel.Item>
          <img 
          className="d-block w-100" src={full0} alt="First Slide"/>
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Tech Blog</h4>
            <p>a CMS style Tech-Blog used to solidify the concepts of ORM (Object-Relational Mapping) and MVC (Model-View-Control)</p>
            <h4><a href="https://github.com/mallynnk/tech-blog'">Repository</a></h4>
            <h4><a href='https://glacial-lowlands-59045.herokuapp.com'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <img className="d-block w-100" src={full2} alt="Third Slide"/>
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>News by the Map</h4>
            <p>an app for searching for top news by location</p>
            <h4><a href="https://github.com/adamkeyser45/newsbythemap'">Repository</a></h4>
            <h4><a href='https://adamkeyser45.github.io/newsbythemap/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        <Carousel.Item>
          <img className="d-block w-100" src={full3} alt="Fourth Slide"/>
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Budget Tracker</h4>
            <p>a Node.js app using Inquirer to gather user input and Express.js to serve data, while performing CRUD operations on a MySQL Database to store employee information</p>
            <h4><a href="https://github.com/mallynnk/budget-tracker">Repository</a></h4>
            <h4><a href='https://polar-inlet-39292.herokuapp.com/'>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item> 
        {/* <Carousel.Item>
          <img className="d-block w-100" src={} alt="Fourth Slide"/>
        <Carousel.Caption>
            <h4 style={{textAlign: 'center'}}>Roysters</h4>
            <p>a website for Royster to sell oysters and provide information to customers</p>
            <h4><a href="">Repository</a></h4>
            <h4><a href=''>Site</a></h4>
        </Carousel.Caption>.
        </Carousel.Item>  */}
      </Carousel>
  );
};

export default FullCarousel;
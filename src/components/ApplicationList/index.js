import React, { useState } from 'react';
import Modal from '../Modal';
import front0 from '../../assets/img/large/front/0.png'
import front1 from '../../assets/img/large/front/1.png'
import front2 from '../../assets/img/large/front/2.png'
import front3 from '../../assets/img/large/front/3.png'
import back0 from '../../assets/img/large/back/0.png'
import back1 from '../../assets/img/large/back/1.png'
import back2 from '../../assets/img/large/back/2.png'
import back3 from '../../assets/img/large/back/3.png'
import back4 from '../../assets/img/large/back/4.png'
import full0 from '../../assets/img/large/full/0.png'
import full1 from '../../assets/img/large/full/1.png'
import full2 from '../../assets/img/large/full/2.png'
import full3 from '../../assets/img/large/full/3.png'
import full4 from '../../assets/img/large/full/4.png'

const images = { 
  front0, front1, front2, front3, back0, back1, back2, back3, back4, full0, full1, full2, full3, full4
}

const ApplicationList = ({ category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [applications] = useState([
    {
      name: 'Horiseon',
      category: 'front',
      description: '',
      GitHub: 'https://github.com/mallynnk/Horiseon-Refactor',
      site:'https://mallynnk.github.io/Horiseon-Refactor/',
    },
    {
      name: 'Code Quiz',
      category: 'front',
      description: 'An easy JavaScript knowledge quiz built with HMTL, CSS and JavaScript',
      GitHub: 'https://github.com/mallynnk/code-quiz',
      site:'https://mallynnk.github.io/code-quiz/',
    },
    {
      name: 'Work Day Scheduler',
      category: 'front',
      description: 'An app for planning out your schedule for the work day',
      GitHub: 'https://github.com/mallynnk/daily-schedule',
      site:'https://mallynnk.github.io/daily-schedule/',
    },
    {
      name: 'Weather Dashboard',
      category: 'front',
      description: 'A weather app using weather forecast information',
      GitHub: 'https://github.com/mallynnk/weather-dashboard',
      site:'https://mallynnk.github.io/weather-dashboard/',
    },
    {
      name: 'Readme Generator',
      category: 'back',
      description: 'A Node.js app for generating a markdown readme page',
      GitHub: 'https://github.com/mallynnk/readme-generator',
      site:'NA',
    },
    {
      name: 'Team Profile Generator',
      category: 'back',
      description: 'A Node.js build app to generate an HTML page of team members with team roles and other data',
      GitHub: 'https://github.com/mallynnk/team-profile-gen',
      site:'NA',
    },
    {
      name: 'Note Taker',
      category: 'back',
      description: 'A note taking program in which my role was to focus on the back end build',
      GitHub: 'https://github.com/mallynnk/note-taker',
      site:'https://enigmatic-refuge-44915.herokuapp.com',
    },
    {
      name: 'Employee Tracker',
      category: 'back',
      description: 'A Node.js app using Inquirer to gather user input and Express.js to serve data, while performing CRUD operations on a MySQL Database to store employee information',
      GitHub: 'https://github.com/mallynnk/employee-tracker',
      site:'https://drive.google.com/file/d/1Llt9LVLoX5ApCDHZGfiVDHhXzJCOLpMz/viewhttps://drive.google.com/file/d/1Llt9LVLoX5ApCDHZGfiVDHhXzJCOLpMz/view',
    },
    {
      name: 'E-Commerce Back End',
      category: 'back',
      description: 'A Node.js app that uses Express.js to serve data while using sequelize to perform CRUD operations on a MySQL database for an E-Commerce Site',
      GitHub: 'https://github.com/mallynnk/ecommerce',
      site:'https://drive.google.com/file/d/1W3AFtCMbJIAg9U1fbBHit2KkRCYbJaur/view',
    },
    {
      name: 'Tech Blog',
      category: 'full',
      description: 'A CMS style Tech-Blog used to solidify the concepts of ORM (Object-Relational Mapping) and MVC (Model-View-Control)',
      GitHub: 'https://github.com/mallynnk/tech-blog',
      site:'https://glacial-lowlands-59045.herokuapp.com',
    },
    {
      name: 'Ask Father Time',
      category: 'full',
      description: '',
      GitHub: 'https://github.com/nosremetnarg/askFatherTime',
      site:'https://mighty-meadow-10557.herokuapp.com/',
    },
    {
      name: 'News by the Map',
      category: 'full',
      description: '',
      GitHub: 'https://github.com/adamkeyser45/newsbythemap',
      site:'https://adamkeyser45.github.io/newsbythemap/',
    },
    {
      name: 'Budget Tracker',
      category: 'full',
      description: 'A Progressive Web Application built from an already functioning front end app',
      GitHub: 'https://github.com/mallynnk/budget-tracker',
      site:'https://polar-inlet-39292.herokuapp.com/',
    },
    {
      name: 'Royster',
      category: 'full',
      description: '',
      GitHub: 'https://github.com/mallynnk/Pearls',
      site:'https://young-shelf-14995.herokuapp.com/',
    },
  ]);

  const currentApplications = applications.filter((application) => application.category === category);
  const [currentApplication, setCurrentApplication] = useState();


  const toggleModal = (image, i) => {
    setCurrentApplication({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  
  return (
    <div>
      {isModalOpen && (
        <Modal currentApplication={currentApplication} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentApplications.map((image, i) => (

          <img 
            src={images[`${category}${i}`]}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
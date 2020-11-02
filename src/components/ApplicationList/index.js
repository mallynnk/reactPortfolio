import React, { useState } from 'react';
import Modal from '../Modal';

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
      name: 'Ask Father Time',
      category: 'full',
      description: 'A MERN stack application built for those seeking to try and share exquisite cocktail recipes.',
      GitHub: 'https://github.com/nosremetnarg/askFatherTime',
      site:'https://mighty-meadow-10557.herokuapp.com/',
    }
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
            src={require(`../../assets/img/large/${category}/${i}.jpg`)}
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
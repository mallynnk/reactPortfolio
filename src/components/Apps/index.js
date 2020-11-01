import React, { useState } from 'react';
import Modal from '../Modal';

const Apps = ({ category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [apps] = useState([
    {
      // image: 'https://github.com/rachelf0/reactportfolio/raw/master/src/assets/img/large/front/0.jpg',
      name: 'Run Buddy',
      category: 'front',
      description: 'Front end site of a running based company. Uses html and advanced css',
      GitHub: '',
      site:'',
    },
    {
      name: 'Taskinator',
      category: 'front',
      description: 'An app for keeping tasks organized',
      GitHub: '',
      site:'',
    },
    {
      name: 'Code Quiz',
      category: 'front',
      description: 'An easy JavaScript knowledge quiz built with HMTL, CSS and JavaScript',
      GitHub: '',
      site:'',
    },
    {
      name: 'Work Day Scheduler',
      category: 'front',
      description: 'An app for planning out your schedule for the work day',
      GitHub: '',
      site:'',
    },
    {
      name: 'Weather Dashboard',
      category: 'front',
      description: 'A weather app using weather forecast information',
      GitHub: '',
      site:'',
    },
    {
      name: 'Readme Generator',
      category: 'back',
      description: 'A Node.js app for generating a markdown readme page',
      GitHub: '',
      site:'NA',
    },
    {
      name: 'Team Profile Generator',
      category: 'back',
      description: 'A Node.js build app to generate an HTML page of team members with team roles and other data',
      GitHub: '',
      site:'NA',
    },
    {
      name: 'Note Taker',
      category: 'back',
      description: 'A note taking program in which my role was to focus on the back end build',
      GitHub: '',
      site:'',
    },
    {
      name: 'Employee Tracker',
      category: 'back',
      description: 'A Node.js app using Inquirer to gather user input and Express.js to serve data, while performing CRUD operations on a MySQL Database to store employee information',
      GitHub: '',
      site:'NA',
    },
    {
      name: 'E-Commerce Back End',
      category: 'back',
      description: 'A Node.js app that uses Express.js to serve data while using sequelize to perform CRUD operations on a MySQL database for an E-Commerce Site',
      GitHub: '',
      site:'NA',
    },
    {
      name: 'Tech Blog',
      category: 'full',
      description: 'A CMS style Tech-Blog used to solidify the concepts of ORM (Object-Relational Mapping) and MVC (Model-View-Control)',
      GitHub: '',
      site:'',
    },
    {
      name: 'News by the Map',
      category: 'full',
      description: '',
      GitHub: '',
      site:'',
    },
    {
      name: 'Budget Tracker',
      category: 'full',
      description: 'A Progressive Web Application built from an already functioning front end app',
      GitHub: '',
      site:'',
    },
    {
      name: 'Ask Father Time',
      category: 'full',
      description: 'A MERN stack application built for those seeking to try and share exquisite cocktail recipes.',
      GitHub: '',
      site:'',
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

export default Apps;
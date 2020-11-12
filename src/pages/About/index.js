import React from 'react';
import profilePicture from '../../assets/img/profPic.png'
import Hero from '../../components/Hero'

function About() {
    return (
        
        <section className="about">
            <div> <Hero></Hero>
            <div>
                <h1 id="about">about me</h1>
                <img className="profile-picture" src={profilePicture} alt="Mallory Korpics" />
            </div>
            <div className="bio">
                <p>
                My name is Mallory Willeke, and I have been the Operations Manager at a neurofeedback (mental health) clinic since its early start-up days in 2017. Working for a neurofeedback company, 
                I have been deeply embedded in an innovative environment focused on helping clients reach their full potential. 
                Due to some life changes, I decided to enroll in a full stack coding bootcamp and pursue a development career.

                I am currently attending a Vanderbilt University Coding Bootcamp, that concludes November 2020. Since starting the course I have become familiar with Git, HTML,
                CSS, JavaScript, AJAX, jQuery, MySQL, MongoDB, Express.js, React, Node.js, HandleBars.js, Test-driven Development (TDD), Object Oriented Programing (OOP), Test Driven Development(TDD),
                Object-Relational Mapping(ORM), Model-View-Controller(MVC), RegEx, and Progressive Web Applications (PWA).
                </p>
                <br />
                <p>
                I am a self-starter and good at figuring things out, 
                but I am not afraid to ask for help. I strive to listen to others. 
                I am eager to learn and am committed to doing the best I can in whatever I do. 
                I will go above in beyond in order to do the best at my job. 
                I am competent, dedicated, and loyal. I have much more confidence and humility than I did three years, but I am still learning every day.
                </p>
                <br />
                <p>
                While I am new to the development world and still have much to learn, I am hopeful that my experience at a rapidly changing startup, passion for learning, and dedication to my work makes me a promising candidate for a development position. 
                The difficulty in having to learn so many things in a growing company without supervision resulted in an enthusiasm for creating systems, honed my time-management and communication skills, and gave me a new kind of work ethic and perseverance. 
                </p>
            </div>
            </div> 
        </section>
    );
}

export default About;

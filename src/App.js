import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Apps from './components/Apps';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
   
    const [categories] = useState([
        {name: 'front', description: 'Front End Projects'},
        { name: 'back', description: 'Back End Projects'},
        { name: 'full', description: 'Front and Back End Projects'}
      ]);
    
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
      switch (currentPage) {
        case 'About':
          return <About />;
        case 'Contact':
          return <ContactForm />;
        case 'Front':
          return <Apps currentCategory={categories[0]}></Apps>
        case 'Back':
          return <Apps currentCategory={categories[1]}></Apps>
        case 'Full':
          return <Apps currentCategory={categories[2]}></Apps>
        case 'Resume':
          return <Resume />;
        default:
          return <About />;
      }
    };
    
  
    return (
      <div className="page-container">
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
      ></Nav>
        <main>

          <div>{renderPage(currentPage)}</div>

       </main>
      <Footer />
      </div>
    );
    }

  
  export default App;
  
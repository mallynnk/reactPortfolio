import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Apps from './components/Apps';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    const [contactSelected, setContactSelected] = useState(false);
    const [categories] = useState([
      {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial projects',
      },
      { name: 'portraits', description: 'Portraits of people in my life' },
      { name: 'food', description: 'Delicious delicacies' },
      { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
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
  
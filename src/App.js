import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './components/Hero'

//import pages
import About from "./pages/About";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import Resume from './pages/Resume';

function App() {
   
    return (
      <Router>
      <div className="page-container">
      <h1>Mallory Willeke</h1>
      <Nav></Nav>
      <Hero></Hero>
        <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
        </Switch>
      <Footer />
      </ div>
      </Router>
    );
    }

  
  export default App;
  
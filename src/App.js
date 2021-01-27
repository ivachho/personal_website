//this is the main page 

import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; // import for react router
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeachingPage from './pages/TeachingPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';


class App extends React.Component { //class component instead of function because we are using state inside of here
  constructor(props){ //get props
    super(props); //take in props
    this.state = {
      title: 'Iva Chho',
      headerLinks:[
        {title: 'Home', path: '/'},
        {title: 'Contact', path: '/contact'},
        {title: 'Teaching', path: '/teaching'},
        {title: 'Projects', path: '/projects'},
        {title: 'Experience', path: '/experience'},
        {title: 'About', path: '/about'},
      ], //^^ for navbar 
      home: {
        title: 'Welcome!',
        subTitle: '',
        subsubTitle: 'Check out my socials'
      }, //states for home page
      about: {
        title: 'About Me'
        
      }, //state for about
      contact: {
        title: 'Contact Me'
      }, //state for contact
      teaching: {
        title: 'My Passion for Teaching'
      }, //state for teaching
      projects: {
        title: 'Past Projects'
      }, //state for projects
      experience: {
        title: 'Past Experience'
      }, //state for experience 
    }
  }
  render(){ //this is the render method 
  return (
    <Router> 
      
      <Container className="p-0" className="home-background" fluid={true}> 
        <Navbar className="border-bottom" className="home-background" expand="lg">
          <Navbar.Brand >Iva Chho</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="never-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/teaching">Teaching</Link>
              <Link className="nav-link" to="/projects">Projects</Link>
              <Link className="nav-link" to="/experience">Experience</Link>
              <Link className="nav-link" to="/about">About</Link> 
              <Link className="nav-link" to="/contact">Contact</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} subsubTitle={this.state.home.subsubTitle}/>}/>
        <Route path="/about"  render={() => <AboutPage title={this.state.about.title}/>}/>
        <Route path="/contact"  render={() => <ContactPage title={this.state.contact.title}/>}/>
        <Route path="/teaching"  render={() => <TeachingPage title={this.state.teaching.title}/>}/>
        <Route path="/projects"  render={() => <ProjectsPage title={this.state.projects.title}/>}/>
        <Route path="/experience"  render={() => <ExperiencePage title={this.state.experience.title}/>}/>

          <Footer/> 

      </Container>
    </Router>
  );
  }
}

export default App;
//understanding the code 
/*
fluid=true means itll take up the whole width of the screen, no margin on the side 
p-0 means padding is 0
border-bottom means there will be a line under
ml-auto means links will go to the left

LINK THINGS: responsible for changing the paths, but not linked to new page 
toggle: when the window is made smaller, there is a toggle option (expend="lg" is needed)

Routing: click on link and goes to different pages 
when homepage is clicked, render the homepage title, subtitle, and subsubtitle
same for all other pages 




<Route path="/about"  render={() => <AboutPage title={this.state.about.title}/>}/>
<Link className="nav-link" to="/">Home</Link>

---- ^^How does this work ---
on a certain path, render/display a certain component 
react router uses link components instead of anchortag <a> or buttons 
"to" means change paths to (url changes)

when on this path (Route path="/about"), render (<AboutPage title={this.state.about.title}/>} ) this component

for "/", we need "exact" because "/about", etc also contains "/"

PAGES ARE NOT CLASSBASED(they can be), they are function based and we just pass info in and they display it 

*/
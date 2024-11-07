import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import FoodLog from './components/FoodLog';
import RecipeSearch from './components/RecipeSearch';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg" fixed="top" data-bs-theme="light">
          <Container>
            <Navbar.Brand>NutritionTrac</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/food-log">Food Log</Nav.Link>
                <Nav.Link as={Link} to="/recipe-search">Recipe Search</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{ paddingTop: '70px' }}> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/food-log' element={<FoodLog />} />
            <Route path='/recipe-search' element={<RecipeSearch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
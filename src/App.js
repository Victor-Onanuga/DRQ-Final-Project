import React from 'react';
import './App.css';
import Home from './components/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import addSportScandal from './components/addSportScandal';
import Read from './components/hotTopics';
import Edit from './components/edit';
import Logo from './jordanLogo.png';
import Football from './components/Football';
import Basketball from './components/Basketball';
import GAA from './components/GAA';
import all from './components/allSports';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Sports Central</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
        <Nav.Link href="/hotTopics">Hot Topics</Nav.Link>
        <Nav.Link href="/add">Add a new Sports Scandal !!</Nav.Link>
        <NavDropdown title="Types of Sport" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/Football">Football</NavDropdown.Item>
          <NavDropdown.Item href="/Basketball">Basketball</NavDropdown.Item>
          <NavDropdown.Item href="/GAA">Gaa</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/allSports">All Sports</NavDropdown.Item>
        </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={addSportScandal} />
            <Route path="/hotTopics" component={Read} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/Football" component={Football} />
            <Route path="/Basketball" component={Basketball} />
            <Route path="/GAA" component={GAA} />
            <Route path="/allSports" component={all} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

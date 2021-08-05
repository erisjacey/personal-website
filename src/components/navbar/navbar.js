import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Avatar, Typography, Link,
} from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import ProfilePic from 'myAssets/my-personal-picture_square.jpg';
import './navbar.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <Navbar bg="primary3" expand="lg" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <div className="navbar__brand">
            Eris Jacey
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav justify>
            <Nav.Link className="navbar__link" href="/education">Education</Nav.Link>
            <Nav.Link className="navbar__link" href="/experience">Experience</Nav.Link>
            <Nav.Link className="navbar__link" href="/blog">Blog</Nav.Link>
            <Nav.Link className="navbar__link" href="/projects">Projects</Nav.Link>
            <Nav.Link className="navbar__link" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

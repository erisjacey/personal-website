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
  const preventDefault = (event) => event.preventDefault();

  const renderTopLeft = () => (
    <>
      <Grid item xs={4}>
        <NavLink to="/home">
          <Typography variant="h6" gutterBottom>
            Eris Jacey
          </Typography>
        </NavLink>
      </Grid>
      <Grid item xs>
        <Link
          href="mailto:eris_jacey@hotmail.com"
          target="_blank"
          rel="noopener"
        >
          <Email fontSize="large" color="primary" />
        </Link>
      </Grid>
      <Grid item xs>
        <Link
          href="https://github.com/erisjacey"
          target="_blank"
          rel="noopener"
        >
          <GitHub fontSize="large" color="primary" />
        </Link>
      </Grid>
      <Grid item xs>
        <Link
          href="https://www.linkedin.com/in/eris-jacey-masagca-309795197/"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn fontSize="large" color="primary" />
        </Link>
      </Grid>
    </>
  );

  const renderTopRight = () => (
    <>
      <Grid item xs>
        <NavLink to="/about">
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
        </NavLink>
      </Grid>
      <Grid item xs>
        <NavLink to="/projects">
          <Typography variant="h6" gutterBottom>
            Projects
          </Typography>
        </NavLink>
      </Grid>
      <Grid item xs>
        <NavLink to="/blog">
          <Typography variant="h6" gutterBottom>
            Blog
          </Typography>
        </NavLink>
      </Grid>
      <Grid item xs>
        <NavLink to="/contact">
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
        </NavLink>
      </Grid>
    </>
  );

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
            <Nav.Link className="navbar__link" href="/about">About</Nav.Link>
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

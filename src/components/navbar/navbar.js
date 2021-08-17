import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLink } from 'myRedux/actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Avatar, Typography, Link,
} from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
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
  const dispatch = useDispatch();
  const { currentLink } = useSelector((state) => state.currentLink);

  return (
    <Navbar bg="primary3" expand="lg" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <div className="navbar__brand">
            Eris Jacey
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            justify
            activeKey={currentLink}
            onSelect={(selectedKey) => dispatch(setCurrentLink(selectedKey))}
          >
            <Nav.Link className="navbar__link" href="/education" eventKey="/education">Education</Nav.Link>
            <Nav.Link className="navbar__link" href="/experience" eventKey="/experience">Experience</Nav.Link>
            <Nav.Link className="navbar__link" href="/blog" eventKey="/blog">Blog</Nav.Link>
            <Nav.Link className="navbar__link" href="/projects" eventKey="/projects">Projects</Nav.Link>
            <Nav.Link className="navbar__link" href="/contact" eventKey="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

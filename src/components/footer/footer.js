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
import './footer.scss';

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

const Footer = () => {
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
    <Navbar bg="primary1" expand="lg" variant="dark">
      <Container>
        <Navbar.Collapse className="footer__left" id="basic-navbar-nav">
          <Navbar.Text>
            Website developed by Eris Jacey Masagca, 2021.
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="footer__right" id="basic-navbar-nav">
          <Link
            href="mailto:eris_jacey@hotmail.com"
            target="_blank"
            rel="noopener"
          >
            <Email fontSize="large" color="primary" />
          </Link>
          <Link
            href="https://github.com/erisjacey"
            target="_blank"
            rel="noopener"
          >
            <GitHub fontSize="large" color="primary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/eris-jacey-masagca-309795197/"
            target="_blank"
            rel="noopener"
          >
            <LinkedIn fontSize="large" color="primary" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;

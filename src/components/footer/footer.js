import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Row, Col, Navbar, Nav, NavDropdown,
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

  return (
    <Navbar bg="primary1" expand="lg" variant="dark" className="footer">
      <Container>
        <Navbar.Collapse className="footer__left" id="basic-navbar-nav">
          <div className="footer__left__text">
            Website developed by Eris Jacey Masagca, 2021.
          </div>
        </Navbar.Collapse>
        <Navbar.Collapse className="footer__right" id="basic-navbar-nav">
          <Container>
            <Row>
              <Col sm={{ span: 1, offset: 9 }}>
                <Link
                  href="mailto:eris_jacey@hotmail.com"
                  target="_blank"
                  rel="noopener"
                >
                  <Email fontSize="large" className="footer__right__icon" />
                </Link>
              </Col>
              <Col sm={{ span: 1 }}>
                <Link
                  href="https://github.com/erisjacey"
                  target="_blank"
                  rel="noopener"
                >
                  <GitHub fontSize="large" className="footer__right__icon" />
                </Link>
              </Col>
              <Col sm={{ span: 1 }}>
                <Link
                  href="https://www.linkedin.com/in/eris-jacey-masagca-309795197/"
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedIn fontSize="large" className="footer__right__icon" />
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Navbar, Nav, NavDropdown, Breadcrumb,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLink } from 'myRedux/actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Avatar, Typography, Link, Breadcrumbs,
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

  const getBaseLink = () => `/${currentLink.split('/')[1]}`;

  const getBreadcrumbLinks = () => {
    const breadcrumbs = currentLink.split('/').slice(1); // array of strings
    const breadcrumbLinks = [];
    for (let i = 0; i < breadcrumbs.length; i += 1) {
      let link = '';
      for (let j = 0; j <= i; j += 1) {
        link += `/${breadcrumbs[j]}`;
      }
      breadcrumbLinks.push({
        name: breadcrumbs[i],
        link,
      });
    }
    return breadcrumbLinks;
  };

  const renderBreadcrumbs = () => {
    const breadcrumbLinks = getBreadcrumbLinks();
    return (
      <Breadcrumbs
        separator={<div className="navbar__breadcrumbs__separator">/</div>}
        aria-label="breadcrumb"
        className="navbar__breadcrumbs"
      >
        {breadcrumbLinks.map((breadcrumb, index) => (index !== breadcrumbLinks.length - 1
          ? (
            <Link
              href={breadcrumb.link}
              onClick={() => dispatch(setCurrentLink(breadcrumb.link))}
              className="navbar__breadcrumbs__link"
            >
              {breadcrumb.name}
            </Link>
          )
          : (
            <div className="navbar__breadcrumbs__text">{breadcrumb.name}</div>
          )))}
      </Breadcrumbs>
    );
  };

  return (
    <Navbar bg="primary3" expand="lg" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href="/home" onClick={() => dispatch(setCurrentLink('/home'))}>
          <div className="navbar__brand">
            Eris Jacey
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            justify
            activeKey={getBaseLink()}
            onSelect={(selectedKey) => dispatch(setCurrentLink(selectedKey))}
          >
            <Nav.Link className="navbar__link" href="/education" eventKey="/education">Education</Nav.Link>
            <Nav.Link className="navbar__link" href="/experience" eventKey="/experience">Experience</Nav.Link>
            <Nav.Link className="navbar__link" href="/blog" eventKey="/blog">Blog</Nav.Link>
            <Nav.Link className="navbar__link" href="/projects" eventKey="/projects">Projects</Nav.Link>
            <Nav.Link className="navbar__link" href="/contact" eventKey="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {renderBreadcrumbs()}
      </Container>
    </Navbar>
  );
};

export default NavBar;

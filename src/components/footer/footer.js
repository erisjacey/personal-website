import React from 'react';
import {
  Container, Navbar, Nav,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link,
} from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
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
  const { isDesktopView } = useSelector((state) => state.isDesktopView);
  const mobile = isDesktopView ? '' : '__mobile';
  const websiteDevelopedBy = isDesktopView ? 'Website developed by ' : '';

  return (
    <Navbar bg="primary1" variant="dark" className={`footer${mobile}`}>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="footer__left" id="basic-navbar-nav">
          <Nav className="float-left">
            <Navbar.Text className="footer__left__text">
              {`${websiteDevelopedBy}Eris Jacey Masagca, 2021.`}
            </Navbar.Text>
          </Nav>
          <Nav className="ms-auto gap-2">
            <Navbar.Text>
              <Link
                href="mailto:eris_jacey@hotmail.com"
                target="_blank"
                rel="noopener"
              >
                <Email fontSize="large" className="footer__right__icon" />
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link
                href="https://github.com/erisjacey"
                target="_blank"
                rel="noopener"
              >
                <GitHub fontSize="large" className="footer__right__icon" />
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link
                href="https://www.linkedin.com/in/eris-jacey-masagca-309795197/"
                target="_blank"
                rel="noopener"
              >
                <LinkedIn fontSize="large" className="footer__right__icon" />
              </Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;

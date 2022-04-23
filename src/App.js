import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from 'myComponents/navbar';
import Footer from 'myComponents/footer';
import Home from 'myHomePage';
import Education from 'myEducationPage';
import Experience from 'myExperiencePage';
import Projects from 'myProjectsPage';
import Blog from 'myBlogPage';
import Contact from 'myContactPage';
import './App.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
    button: {
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#3aafa9',
        color: '#feffff',
      },
    },
  },
  palette: {
    primary: {
      light: '#feffff',
      main: '#def2f1',
      dark: '#17252a',
    },
    secondary: {
      light: '#feffff',
      main: '#3aafa9',
      dark: '#2b7a78',
    },
  },
});

const RouteWithComponents = ({
  exact, path, responsive, component: Component, ...rest
}) => (
  <Route
    exact={exact}
    path={path}
    {...rest}
    render={(routeProps) => (
      <>
        <NavBar showTopNavMenu={responsive.showTopNavMenu} />
        <div className="main-page__body">
          <Component path={path} {...routeProps} />
        </div>
        <Footer />
      </>
    )}
  />
);

const App = () => {
  const PAGES = [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/education',
      component: Education,
    },
    {
      path: '/experience',
      component: Experience,
    },
    {
      path: '/projects',
      component: Projects,
    },
    {
      path: '/blog',
      component: Blog,
    },
    {
      path: '/contact',
      component: Contact,
    },
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const responsive = {
    showTopNavMenu: windowWidth > 1023,
  };

  return (
    <div className="main-page">
      <ThemeProvider theme={theme}>
        {/* {renderHeader()} */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="home" />
            </Route>
            {PAGES.map((page) => (
              <RouteWithComponents
                key={page.path}
                path={page.path}
                responsive={responsive}
                component={page.component}
              />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

RouteWithComponents.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  responsive: PropTypes.shape({
    showTopNavMenu: PropTypes.bool,
  }).isRequired,
  component: PropTypes.func.isRequired,
};

RouteWithComponents.defaultProps = {
  exact: false,
};

export default App;

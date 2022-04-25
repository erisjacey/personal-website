import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider, StyledEngineProvider, createTheme, adaptV4Theme } from '@mui/material/styles';
import { setIsDesktopView } from 'myRedux/actions';
import NavBar from 'myComponents/navbar';
import Footer from 'myComponents/footer';
import Home from 'myHomePage';
import Education from 'myEducationPage';
import Experience from 'myExperiencePage';
import Projects from 'myProjectsPage';
import Blog from 'myBlogPage';
import Contact from 'myContactPage';
import './App.scss';

const theme = createTheme(adaptV4Theme({
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
}));

const RouteWithComponents = ({
  exact, path, component: Component, ...rest
}) => (
  <Route
    exact={exact}
    path={path}
    {...rest}
    render={(routeProps) => (
      <>
        <NavBar />
        <div className="main-page__body">
          <Component path={path} {...routeProps} />
        </div>
        <Footer />
      </>
    )}
  />
);

const App = () => {
  const dispatch = useDispatch();

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

  const updateDimensions = () => {
    dispatch(setIsDesktopView(window.innerWidth > 1023));
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="main-page">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="home" />
              </Route>
              {PAGES.map((page) => (
                <RouteWithComponents
                  key={page.path}
                  path={page.path}
                  component={page.component}
                />
              ))}
            </Switch>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
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

import React from 'react';
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
import About from 'myAboutPage';
import Projects from 'myProjectsPage';
import Blog from 'myBlogPage';
import Contact from 'myContactPage';
import './App.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    primary: {
      light: '#feffff;',
      main: '#def2f1',
      dark: '#17252a',
    },
    secondary: {
      light: '#feffff;',
      main: '#3aafa9',
      dark: '#2b7a78',
    },
  },
});

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
          <Component {...routeProps} />
        </div>
        <Footer />
      </>
    )}
  />
);

const App = () => {
  const pages = [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      component: About,
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

  return (
    <div className="main-page">
      <ThemeProvider theme={theme}>
        {/* {renderHeader()} */}
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="home" />
            </Route>
            {pages.map((page) => (
              <RouteWithComponents
                exact
                path={page.path}
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
  component: PropTypes.func.isRequired,
};

RouteWithComponents.defaultProps = {
  exact: false,
};

export default App;

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

const RouteWithNavbar = ({
  exact, path, component: Component, ...rest
}) => (
  <Route
    exact={exact}
    path={path}
    {...rest}
    component={(routeProps) => (
      <>
        <NavBar {...routeProps} />
        <Component {...routeProps} />
        <Footer {...routeProps} />
      </>
    )}
  />
);

const App = () => (
  // const renderHeader = () => (
  // <NavBar />
  // );
  <div className="main-page">
    <ThemeProvider theme={theme}>
      {/* {renderHeader()} */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="home" />
          </Route>
          <RouteWithNavbar exact path="/home" component={Home} />
          <RouteWithNavbar exact path="/about" component={About} />
          <RouteWithNavbar exact path="/projects" component={Projects} />
          <RouteWithNavbar exact path="/blog" component={Blog} />
          <RouteWithNavbar exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </ThemeProvider>
  </div>
);

RouteWithNavbar.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

RouteWithNavbar.defaultProps = {
  exact: false,
};

export default App;

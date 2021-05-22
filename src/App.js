import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';
import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
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

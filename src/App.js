import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
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

const App = () => {
  const renderHeader = () => (
    <NavBar />
  );
  return (
    <div className="main-page">
      <ThemeProvider theme={theme}>
        {renderHeader()}
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;

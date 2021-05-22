import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import NavBar from './components/navbar';
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
  const renderBody = () => (
    <h1>This is a work in progress. Stay tuned!</h1>
  );
  return (
    <div className="main-page">
      <ThemeProvider theme={theme}>
        {renderHeader()}
        {renderBody()}
      </ThemeProvider>
    </div>
  );
};

export default App;

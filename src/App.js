import React from 'react';
import NavBar from './components/navbar';
import './App.scss';

const App = () => {
  const renderHeader = () => (
    <NavBar />
  );
  const renderBody = () => (
    <h1>This is a work in progress. Stay tuned!</h1>
  );
  return (
    <div className="main-page">
      {renderHeader()}
      {renderBody()}
    </div>
  );
};

export default App;

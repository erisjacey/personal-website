import React from 'react';
import Header from './components/header';
import './App.scss';

const App = () => {
  const renderHeader = () => (
    <Header />
  );
  const renderBody = () => (
    <span>This is a work in progress. Stay tuned!</span>
  );
  return (
    <div className="main-page">
      {renderHeader()}
      {renderBody()}
    </div>
  );
};

export default App;

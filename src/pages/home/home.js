import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import './home.scss';

const Home = () => {
  const PAGE_NAME = 'Hello World';
  const PAGE_SUB_HEADER = 'I am Eris Jacey, a Computer Science undergraduate from the National University of Singapore (NUS), and minimalist enthusiast.';

  const renderExtender = () => (
    <div>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
      <h1>This is the Home page which is still a WIP. Stay tuned!</h1>
    </div>
  );

  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
      {/* {renderExtender()} */}
    </div>
  );
};

export default Home;

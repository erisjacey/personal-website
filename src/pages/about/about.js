import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import './about.scss';

const About = () => {
  const PAGE_NAME = 'About';
  const PAGE_SUB_HEADER = 'This is the About page which is still a WIP. Stay tuned!';
  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
    </div>
  );
};

export default About;

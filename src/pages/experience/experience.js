import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import './experience.scss';

const Experience = () => {
  const PAGE_NAME = 'Experience';
  const PAGE_SUB_HEADER = 'This is the Experience page which is still a WIP. Stay tuned!';
  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
    </div>
  );
};

export default Experience;

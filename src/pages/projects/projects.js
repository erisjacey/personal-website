import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import './projects.scss';

const Projects = () => {
  const PAGE_NAME = 'Projects';
  const PAGE_SUB_HEADER = 'This is the Projects page which is still a WIP. Stay tuned!';
  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
    </div>
  );
};

export default Projects;

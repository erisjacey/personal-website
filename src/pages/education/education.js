import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import './education.scss';

const Education = () => {
  const PAGE_NAME = 'Education';
  const PAGE_SUB_HEADER = 'This is the Education page which is still a WIP. Stay tuned!';
  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
    </div>
  );
};

export default Education;

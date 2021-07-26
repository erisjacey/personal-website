import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import './contact.scss';

const Contact = () => {
  const PAGE_NAME = 'Contact';
  const PAGE_SUB_HEADER = 'This is the Contact page which is still a WIP. Stay tuned!';
  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
    </div>
  );
};

export default Contact;

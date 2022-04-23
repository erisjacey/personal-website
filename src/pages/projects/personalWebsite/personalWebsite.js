import React from 'react';
import Document from 'myComponents/document';
import TextBlock from 'myComponents/textBlock';
import './personalWebsite.scss';

const PersonalWebsite = () => {
  const NAME = 'Personal Website';

  const AboutThisProject = () => (
    <TextBlock
      heading="About This Project"
      body={[
        'This website was developed using React and deployed on Netlify.',
      ]}
    />
  );

  const BODY = [
    AboutThisProject,
  ];

  return (
    <Document name={NAME} body={BODY} />
  );
};

export default PersonalWebsite;

import React from 'react';
import Document from 'myComponents/document';
import TextBlock from 'myComponents/textBlock';
import './upsideDown.scss';

const UpsideDown = () => {
  const NAME = 'Upside Down';

  const AboutThisProject = () => (
    <TextBlock
      heading="About This Project"
      body={[
        'This game was developed using Unity.',
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

export default UpsideDown;

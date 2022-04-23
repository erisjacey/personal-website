import React from 'react';
import Document from 'myComponents/document';
import TextBlock from 'myComponents/textBlock';
import './dailyCakeyBot.scss';

const DailyCakeyBot = () => {
  const NAME = 'Daily Cakey Bot';

  const AboutThisProject = () => (
    <TextBlock
      heading="About This Project"
      body={[
        'This Telegram bot was developed using Python and deployed on Heroku.',
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

export default DailyCakeyBot;

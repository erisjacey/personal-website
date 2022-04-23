import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Document from 'myComponents/document';
import TextBlock from 'myComponents/textBlock';
import SnapshotPicture1 from 'myProjectsAssets/daily-cakey-bot_snapshot-1.png';
import './dailyCakeyBot.scss';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '650px',
    height: 'auto',
    objectFit: 'cover',
  },
}));

const DailyCakeyBot = () => {
  const classes = useStyles();

  const NAME = 'Daily Cakey Bot';

  const Snapshot1 = () => <img src={SnapshotPicture1} alt="DailyCakeyBot Snapshot 1" className={classes.image} />;

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
    Snapshot1,
  ];

  return (
    <Document name={NAME} body={BODY} />
  );
};

export default DailyCakeyBot;

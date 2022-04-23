import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Document from 'myComponents/document';
import TextBlock from 'myComponents/textBlock';
import SnapshotPicture1 from 'myProjectsAssets/upside-down_snapshot-1.png';
import SnapshotPicture2 from 'myProjectsAssets/upside-down_snapshot-2.png';
import SnapshotPicture3 from 'myProjectsAssets/upside-down_snapshot-3.png';
import SnapshotPicture4 from 'myProjectsAssets/upside-down_snapshot-4.png';
import SnapshotPicture5 from 'myProjectsAssets/upside-down_snapshot-5.png';
import './upsideDown.scss';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
}));

const UpsideDown = () => {
  const classes = useStyles();

  const NAME = 'Upside Down';

  const renderSnapshot = (source, number) => () => (
    <img src={source} alt={`Upside Down Snapshot ${number}`} className={classes.image} />
  );

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
    renderSnapshot(SnapshotPicture1, 1),
    renderSnapshot(SnapshotPicture2, 2),
    renderSnapshot(SnapshotPicture3, 3),
    renderSnapshot(SnapshotPicture4, 4),
    renderSnapshot(SnapshotPicture5, 5),
  ];

  return (
    <Document name={NAME} body={BODY} />
  );
};

export default UpsideDown;

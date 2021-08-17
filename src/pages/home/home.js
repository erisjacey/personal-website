import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import { makeStyles } from '@material-ui/core/styles';
import PersonalPicture from 'myAssets/my-personal-picture.JPG';
import './home.scss';

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '50%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '1%',
  },
}));

const Home = () => {
  const classes = useStyles();

  const PAGE_NAME = 'Hello World';
  const PAGE_SUB_HEADER = 'I am Eris Jacey, a Computer Science undergraduate from the National University of Singapore (NUS), and minimalist enthusiast.';

  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
      <img src={PersonalPicture} alt="Handsome boy" className={classes.image} />
    </div>
  );
};

export default Home;

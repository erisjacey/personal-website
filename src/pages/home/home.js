import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import { makeStyles } from '@material-ui/core/styles';
import Document from 'myComponents/document';
import PersonalPicture from 'myAssets/my-personal-picture_square.jpg';
import './home.scss';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '250px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '50%',
  },
}));

const Home = () => {
  const classes = useStyles();

  const PAGE_NAME = 'Hello World';
  const NAME = 'Home';
  const PAGE_SUB_HEADER = 'I am Eris Jacey, a Computer Science undergraduate from the National University of Singapore (NUS), and minimalist enthusiast.';

  const ProfilePic = () => <img src={PersonalPicture} alt="Handsome boy" className={classes.image} />;

  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} others={[ProfilePic]} />
      <Document name={NAME} />
    </div>
  );
};

export default Home;

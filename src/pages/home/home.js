import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import { makeStyles } from '@material-ui/core/styles';
import Document from 'myComponents/document';
import Paragraph from 'myComponents/paragraph';
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

  const AboutMe = () => (
    <Paragraph
      heading="About Me"
      body="Hi everyone!
      My name is Eris Jacey Masagca, a 24-year-old raised and currently living in Singapore.
      Some of my hobbies include scuba diving, video games, basketball and fitness (basically going to the gym)."
    />
  );

  const ThisWebsite = () => (
    <Paragraph
      heading="This Website"
      body="This website serves as a place to ____________."
    />
  );

  const BODY = [
    AboutMe,
    ThisWebsite,
  ];

  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} others={[ProfilePic]} />
      <Document name={NAME} body={BODY} />
    </div>
  );
};

export default Home;

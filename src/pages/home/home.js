/* eslint-disable no-multi-str */
import React from 'react';
import { useSelector } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';
import PageHeader from 'myComponents/pageHeader';
import Document from 'myComponents/document';
import TextBlock from 'myComponents/textBlock';
import PersonalPicture from 'myAssets/my-personal-picture_square.jpg';
import './home.scss';

const Home = () => {
  const { isDesktopView } = useSelector((state) => state.isDesktopView);
  const classes = makeStyles((theme) => ({
    image: {
      width: isDesktopView ? '250px' : '200px',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '50%',
      marginBottom: isDesktopView ? '0%' : '3%',
    },
  }))();

  const PAGE_NAME = 'Hello World';
  const NAME = 'Home';
  const PAGE_SUB_HEADER = 'I am Eris Jacey, minimalist enthusiast.';

  const ProfilePic = () => <img src={PersonalPicture} alt="Handsome boy" className={classes.image} />;

  const AboutMe = () => (
    <TextBlock
      heading="About Me"
      body={[
        'Hi everyone! \
      My name is Eris Jacey Masagca, a 24-year-old raised (and currently living) in Singapore. \
      I am currently pursuing a Computer Science Bachelor\'s degree at the National University of Singapore (NUS). \
      Some of my hobbies include scuba diving, video games, basketball and fitness.',
        'My philosophy as a developer is to always strive to produce code with the best design practices. \
      I am always looking to improve and gain valuable experience in all aspects.',
        'Feel free to contact me via any of the avenues available at the bottom of this website. \
      Meeting new people is always fun!',
      ]}
    />
  );

  const ThisWebsite = () => (
    <TextBlock
      heading="This Website"
      body={[
        'This website serves as a three-fold display of: my academic and professional endeavours, my random thoughts in the form of blogs, as well as my completed projects. \
      Please feel free to browse the different parts of this website to see any of them in more detail!',
      ]}
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

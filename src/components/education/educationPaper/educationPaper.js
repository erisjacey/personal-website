import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import {
  Paper, Grid, Typography, Button, Link,
} from '@mui/material';
import './educationPaper.scss';

const EducationPaper = ({
  type, school, image, activities, transcript,
}) => {
  const { isDesktopView } = useSelector((state) => state.isDesktopView);

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '300px',
      width: isDesktopView ? '700px' : '325px',
      padding: isDesktopView ? '2% 0%' : '2% 1%',
    },
    image: {
      height: isDesktopView ? '180px' : '100px',
      width: isDesktopView ? '180px' : '100px',
      marginBottom: isDesktopView ? '0%' : '4%',
      objectFit: 'contain',
    },
    heading: {
      fontSize: theme.typography.pxToRem(isDesktopView ? 22 : 20),
      fontWeight: 'bold',
      color: theme.palette.text.primary,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(isDesktopView ? 20 : 18),
      color: theme.palette.text.primary,
    },
    sectionText: {
      fontSize: theme.typography.pxToRem(isDesktopView ? 17 : 15),
      color: theme.palette.text.secondary,
    },
    activitiesHeading: {
      fontSize: theme.typography.pxToRem(isDesktopView ? 17 : 16),
      fontWeight: 'bold',
      color: theme.palette.text.primary,
    },
    activitiesText: {
      fontSize: theme.typography.pxToRem(isDesktopView ? 17 : 15),
      color: theme.palette.text.secondary,
    },
    link: {
      '&:hover': {
        textDecoration: 'none',
      },
    },
    button: {
      fontSize: theme.typography.pxToRem(isDesktopView ? 17 : 15),
      fontWeight: 'bold',
      marginTop: isDesktopView ? '10%' : '15%',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
      },
    },
  }));
  const classes = useStyles();

  const renderTopHalf = () => (
    <Grid
      item
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      style={{ marginBottom: isDesktopView ? '0%' : '4%' }}
    >
      <Grid item xs={isDesktopView ? 4 : 12}>
        <img
          src={image}
          alt={`Logo for ${school.name}`}
          className={classes.image}
        />
      </Grid>
      <Grid
        item
        xs={isDesktopView ? 7 : 12}
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.heading}>{type}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.secondaryHeading}>{school.name}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.sectionText}>{school.exam}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.sectionText}>{school.years}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.sectionText}>{school.grade}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const renderBottomHalf = () => (
    <Grid
      item
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.activitiesHeading}>Activities:</Typography>
        </Grid>
        {activities.map((activity) => (
          <Grid item>
            <Typography className={classes.activitiesText}>{activity}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Link
          href={transcript}
          target="_blank"
          className={classes.link}
          underline="hover">
          <Button size="medium" variant="contained" color="primary" className={classes.button}>
            Transcript
          </Button>
        </Link>
      </Grid>
    </Grid>
  );

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        className={classes.root}
      >
        {renderTopHalf()}
        {renderBottomHalf()}
      </Grid>
    </Paper>
  );
};

EducationPaper.propTypes = {
  type: PropTypes.string.isRequired,
  school: PropTypes.shape({
    name: PropTypes.string,
    exam: PropTypes.string,
    years: PropTypes.string,
    grade: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  activities: PropTypes.arrayOf(PropTypes.string).isRequired,
  transcript: PropTypes.string.isRequired,
};

export default EducationPaper;

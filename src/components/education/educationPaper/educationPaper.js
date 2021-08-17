import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Typography, Button, Link,
} from '@material-ui/core';
import './educationPaper.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '300px',
    width: '700px',
    padding: '2% 0%',
  },
  image: {
    height: '180px',
    width: '180px',
    objectFit: 'contain',
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.primary,
  },
  sectionText: {
    fontSize: theme.typography.pxToRem(17),
    color: theme.palette.text.secondary,
  },
  activitiesHeading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  activitiesText: {
    fontSize: theme.typography.pxToRem(17),
    color: theme.palette.text.secondary,
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  button: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: 'bold',
    marginTop: '10%',
    '&:hover': {
      backgroundColor: '#3aafa9',
      color: '#feffff',
    },
  },
}));

const EducationPaper = ({
  type, school, image, activities, transcript,
}) => {
  const classes = useStyles();

  const renderTopHalf = () => (
    <Grid
      item
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs={4}>
        <img
          src={image}
          alt={`Logo for ${school.name}`}
          className={classes.image}
        />
      </Grid>
      <Grid
        item
        xs={7}
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
        <Link href={transcript} target="_blank" className={classes.link}>
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

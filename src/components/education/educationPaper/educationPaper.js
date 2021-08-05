import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import './educationPaper.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '300px',
    width: '700px',
  },
  image: {
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    height: '60px',
  },
  button: {
    height: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={6}>{image}</Grid>
      <Grid
        item
        xs={6}
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>{type}</Grid>
        <Grid item>{school.name}</Grid>
        <Grid item>{school.exam}</Grid>
        <Grid item>{school.years}</Grid>
        <Grid item>{school.grade}</Grid>
      </Grid>
    </Grid>
  );

  const renderBottomHalf = () => (
    <Grid
      item
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>Activities:</Grid>
        {activities.map((activity) => (
          <Grid item>{activity}</Grid>
        ))}
      </Grid>
      <Grid item>{transcript}</Grid>
    </Grid>
  );

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
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

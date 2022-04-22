import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Typography, Button, Link, Chip,
} from '@material-ui/core';
import './experiencePaper.scss';

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
  chip: {
    margin: '1% 1%',
  },
  descriptionHeading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  descriptionText: {
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

const ExperiencePaper = ({
  name, role, duration, image, skills, description, link,
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
          alt={`Logo for ${name}`}
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
          <Typography className={classes.heading}>{role}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.secondaryHeading}>{name}</Typography>
        </Grid>
        {duration.map((dur) => (
          <Grid item>
            <Typography className={classes.sectionText}>{dur}</Typography>
          </Grid>
        ))}
        <Grid item style={{ width: '100%' }}>
          {skills.map((skill) => (
            <Chip
              size="small"
              label={skill}
              color="primary"
              className={classes.chip}
            />
          ))}
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
          <Typography className={classes.descriptionHeading}>Description:</Typography>
        </Grid>
        {description.map((desc) => (
          <Grid item>
            <Typography className={classes.descriptionText}>{desc}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <Link href={link.url} target="_blank" className={classes.link}>
          <Button size="medium" variant="contained" color="primary" className={classes.button}>
            {link.name}
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

ExperiencePaper.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ExperiencePaper;

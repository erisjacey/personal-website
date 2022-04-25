import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import {
  Paper, Grid, Typography, Button, Link, Chip,
} from '@mui/material';
import './experiencePaper.scss';

const ExperiencePaper = ({
  name, role, duration, image, skills, description, link,
}) => {
  const { isDesktopView } = useSelector((state) => state.isDesktopView);

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '300px',
      width: isDesktopView ? '700px' : '350px',
      padding: isDesktopView ? '2% 0%' : '2%',
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
    chip: {
      margin: '1% 1%',
      fontSize: theme.typography.pxToRem(isDesktopView ? 14 : 12),
    },
    descriptionHeading: {
      fontSize: theme.typography.pxToRem(isDesktopView ? 17 : 16),
      fontWeight: 'bold',
      color: theme.palette.text.primary,
    },
    descriptionText: {
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
      marginTop: '10%',
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
          alt={`Logo for ${name}`}
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
        <Link
          href={link.url}
          target="_blank"
          className={classes.link}
          underline="hover">
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

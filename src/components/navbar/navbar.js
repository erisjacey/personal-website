/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography } from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import ProfilePic from '../../assets/my-personal-picture_square.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const renderTopLeft = () => (
    <>
      <Grid item xs={4}>
        <Typography variant="h6" gutterBottom>
          Eris Jacey
        </Typography>
      </Grid>
      <Grid item xs>
        <Email fontSize="large" />
      </Grid>
      <Grid item xs>
        <GitHub fontSize="large" />
      </Grid>
      <Grid item xs>
        <LinkedIn fontSize="large" />
      </Grid>
    </>
  );

  const renderTopRight = () => (
    <>
      <Grid item xs>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h6" gutterBottom>
          Projects
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h6" gutterBottom>
          Blog
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h6" gutterBottom>
          Contact
        </Typography>
      </Grid>
    </>
  );

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        item
        spacing={2}
        xs={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {renderTopLeft()}
      </Grid>
      <Grid
        container
        item
        xs={3}
        spacing={1}
        direction="row"
        justify="flex-end"
        alignItems="center"
        className={classes.root}
      >
        {renderTopRight()}
      </Grid>
    </Grid>
  );
};

export default NavBar;

/* eslint-disable arrow-body-style */
import React from 'react';
import Grid from '@material-ui/core/Grid';

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      <Grid item xs={2}>
        DP
      </Grid>
      <Grid item xs={10}>
        Rest of Header
      </Grid>
    </Grid>
  );
};

export default Header;

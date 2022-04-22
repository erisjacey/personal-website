import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid,
} from '@material-ui/core';
import './paragraph.scss';

const Paragraph = ({ heading, body }) => (
  <Grid
    container
    direction="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    spacing={2}
    style={{ textAlign: 'left' }}
  >
    <Grid item>
      <Typography variant="h4">{heading}</Typography>
    </Grid>
    <Grid item>
      <Typography>{body}</Typography>
    </Grid>
  </Grid>
);

Paragraph.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string.isRequired,
};

Paragraph.defaultProps = {
  heading: 'No Heading',
};

export default Paragraph;

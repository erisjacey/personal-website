import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid,
} from '@mui/material';
import './textBlock.scss';

const TextBlock = ({ heading, body }) => {
  const renderHeading = () => (heading === ''
    ? null
    : (
      <Grid item>
        <Typography variant="h4">{heading}</Typography>
      </Grid>
    ));

  const renderBody = () => body.map((paragraph) => (
    <Grid item>
      <Typography>{paragraph}</Typography>
    </Grid>
  ));

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      style={{ textAlign: 'left' }}
    >
      {renderHeading()}
      {renderBody()}
    </Grid>
  );
};

TextBlock.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.string),
};

TextBlock.defaultProps = {
  heading: '',
  body: [],
};

export default TextBlock;

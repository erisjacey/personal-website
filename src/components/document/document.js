import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@material-ui/core';
import './document.scss';

const Document = ({ name, body }) => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    spacing={5}
    style={{ padding: '0% 24%' }}
  >
    {body.map((Component) => (
      <Grid
        item
        style={{ width: '100%' }}
      >
        <Component />
      </Grid>
    ))}
  </Grid>
);

Document.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.func),
};

Document.defaultProps = {
  body: [
    () => (
      <h2 style={{
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
      >
        Coming soon!
      </h2>
    ),
  ],
};

export default Document;

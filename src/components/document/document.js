import React from 'react';
import PropTypes from 'prop-types';
import './document.scss';

const Document = ({ name }) => (
  <div style={{
    height: '270px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  >
    <h2>Coming soon!</h2>
  </div>
);

Document.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Document;

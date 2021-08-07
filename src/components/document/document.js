import React from 'react';
import PropTypes from 'prop-types';
import './document.scss';

const Document = ({ name }) => (
  <h5>Coming soon!</h5>
);

Document.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Document;

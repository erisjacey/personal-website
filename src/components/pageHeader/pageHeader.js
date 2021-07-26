import React from 'react';
import PropTypes from 'prop-types';
import './pageHeader.scss';

const PageHeader = ({ name, subHeader }) => (
  <div>
    <h1>{name}</h1>
    <h2>{subHeader}</h2>
  </div>
);

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
};

export default PageHeader;

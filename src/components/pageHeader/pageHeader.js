import React from 'react';
import PropTypes from 'prop-types';
import './pageHeader.scss';

const PageHeader = ({ name, subHeader, others }) => (
  <div className="page-header">
    <h1 className="page-header__title">{name}</h1>
    <h3 className="page-header__sub-header">{subHeader}</h3>
    {others.map((Component) => <Component />)}
    <div className="page-header__line" />
  </div>
);

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  others: PropTypes.arrayOf(PropTypes.func),
};

PageHeader.defaultProps = {
  others: [],
};

export default PageHeader;

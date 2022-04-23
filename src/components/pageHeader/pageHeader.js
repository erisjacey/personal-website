import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './pageHeader.scss';

const PageHeader = ({ name, subHeader, others }) => {
  const { isDesktopView } = useSelector((state) => state.isDesktopView);
  const mobile = isDesktopView ? '' : '__mobile';
  return (
    <div className={`page-header${mobile}`}>
      <h1 className={`page-header__title${mobile}`}>{name}</h1>
      <h3 className={`page-header__sub-header${mobile}`}>{subHeader}</h3>
      {others.map((Component) => <Component />)}
      <div className={`page-header__line${mobile}`} />
    </div>
  );
};

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  others: PropTypes.arrayOf(PropTypes.func),
};

PageHeader.defaultProps = {
  others: [],
};

export default PageHeader;

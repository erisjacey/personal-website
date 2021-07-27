import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';
import PageHeader from 'myComponents/pageHeader';
import Document from 'myComponents/document';
import './scubaDiving.scss';

const ScubaDiving = ({ path, pageName, pageSubHeader }) => {
  const renderScubaDivingPage = () => (
    <div>
      <PageHeader name={pageName} subHeader={pageSubHeader} />
      <Document name={pageName} />
    </div>
  );

  return (
    <div>
      <Switch>
        <Route exact path={path} component={renderScubaDivingPage} />
      </Switch>
    </div>
  );
};

ScubaDiving.propTypes = {
  path: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  pageSubHeader: PropTypes.string.isRequired,
};

export default ScubaDiving;

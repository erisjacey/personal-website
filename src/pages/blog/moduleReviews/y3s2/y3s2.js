/* eslint-disable no-multi-str */
import React from 'react';
import { LONG_DASH } from 'myConstants';
import Document from 'myComponents/document';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y3s2.scss';

const Y3S2 = () => {
  const MODULES = [
  ];

  const renderModules = () => (
    MODULES.map((module) => (
      <ModuleReviewAccordion module={module} />
    ))
  );

  return <Document name="Y3S2" />;
};

export default Y3S2;

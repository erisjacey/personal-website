import React from 'react';
import PropTypes from 'prop-types';
import './document.scss';

const ProjectCard = ({ name }) => (
  <h5>{`Placeholder for ${name}`}</h5>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectCard;

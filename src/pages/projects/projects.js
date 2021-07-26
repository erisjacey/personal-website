import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import PageHeader from 'myComponents/pageHeader';
import ProjectCard from 'myProjectsComponents/projectCard';
import ThumbnailDailyCakeyBot from 'myAssets/projects_daily-cakey-bot_thumbnail.jpeg';
import ThumbnailPersonalWebsite from 'myAssets/projects_personal-website_thumbnail.jpeg';
import DailyCakeyBot from './dailyCakeyBot';
import PersonalWebsite from './personalWebsite';
import './projects.scss';

const Projects = ({ path }) => {
  const PAGE_NAME = 'Projects';
  const PAGE_SUB_HEADER = 'A collection of the projects I have done so far.';

  const PROJECT_DAILY_CAKEY_BOT = {
    name: 'DailyCakeyBot',
    description: 'A simple Telegram bot for generating random dessert recipes',
    image: ThumbnailDailyCakeyBot,
    link: '/daily-cakey-bot',
  };

  const PROJECT_PERSONAL_WEBSITE = {
    name: 'Personal Website',
    description: 'My own personal website',
    image: ThumbnailPersonalWebsite,
    link: '/personal-website',
  };

  const PROJECTS = [
    PROJECT_DAILY_CAKEY_BOT,
    PROJECT_PERSONAL_WEBSITE,
  ];

  const renderProjectCards = () => (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {PROJECTS.map((project) => (
        <Grid item>
          <ProjectCard
            name={project.name}
            image={project.image}
            description={project.description}
            link={`${path}${project.link}`}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
      <Switch>
        <Route exact path={path} component={renderProjectCards} />
        <Route path={`${path}${PROJECT_DAILY_CAKEY_BOT.link}`} component={DailyCakeyBot} />
        <Route path={`${path}${PROJECT_PERSONAL_WEBSITE.link}`} component={PersonalWebsite} />
      </Switch>
    </div>
  );
};

Projects.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Projects;

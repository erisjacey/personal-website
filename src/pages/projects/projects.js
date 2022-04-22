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
import ThumbnailDailyCakeyBot from 'myProjectsAssets/daily-cakey-bot_thumbnail.jpeg';
import ThumbnailPersonalWebsite from 'myProjectsAssets/personal-website_thumbnail.jpeg';
import ThumbnailUpsideDown from 'myProjectsAssets/upside-down_thumbnail.jpeg';
import DailyCakeyBot from './dailyCakeyBot';
import PersonalWebsite from './personalWebsite';
import UpsideDown from './upsideDown';
import './projects.scss';

const Projects = ({ path }) => {
  const PAGE_NAME = 'Projects';
  const PAGE_SUB_HEADER = 'A collection of the projects I have done so far.';

  const PROJECT_DAILY_CAKEY_BOT = {
    name: 'DailyCakeyBot',
    description: 'A simple Telegram bot for generating random dessert recipes',
    image: ThumbnailDailyCakeyBot,
    link: '/daily-cakey-bot',
    seeMore: '/daily-cakey-bot',
    github: 'https://github.com/erisjacey/daily-cakey-bot',
    component: DailyCakeyBot,
  };

  const PROJECT_PERSONAL_WEBSITE = {
    name: 'Personal Website',
    description: 'My own personal website',
    image: ThumbnailPersonalWebsite,
    link: '/personal-website',
    seeMore: '/personal-website',
    github: 'https://github.com/erisjacey/personal-website',
    component: PersonalWebsite,
  };

  const PROJECT_UPSIDE_DOWN = {
    name: 'Upside Down',
    description: 'A group project developed for CS3247 Game Development',
    image: ThumbnailUpsideDown,
    link: '/upside-down',
    seeMore: 'https://tingalinga.itch.io/upside-down',
    github: 'https://github.com/erisjacey/cs3247-group-project',
    component: UpsideDown,
  };

  const PROJECTS = [
    PROJECT_DAILY_CAKEY_BOT,
    PROJECT_PERSONAL_WEBSITE,
    PROJECT_UPSIDE_DOWN,
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
            key={project.name}
            name={project.name}
            image={project.image}
            description={project.description}
            link={`${path}${project.link}`}
            seeMore={project.seeMore}
            github={project.github}
          />
        </Grid>
      ))}
    </Grid>
  );

  const renderProjectsPage = () => (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
      {renderProjectCards()}
    </div>
  );

  const renderProject = (name, subHeader, Component) => (
    <div>
      <PageHeader name={name} subHeader={subHeader} />
      <Component />
    </div>
  );

  return (
    <div>
      <Switch>
        <Route exact path={path} component={renderProjectsPage} />
        {PROJECTS.map((project) => (
          <Route
            key={project.name}
            path={`${path}${project.link}`}
            component={
              () => renderProject(
                project.name,
                `${project.description}.`,
                project.component,
              )
            }
          />
        ))}
      </Switch>
    </div>
  );
};

Projects.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Projects;

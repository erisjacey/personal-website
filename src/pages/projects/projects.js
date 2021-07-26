import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import {
  Grid,
} from '@material-ui/core';
import ProjectCard from 'myProjectsComponents/projectCard';
import ThumbnailDailyCakeyBot from 'myAssets/projects_daily-cakey-bot_thumbnail.jpeg';
import ThumbnailPersonalWebsite from 'myAssets/projects_personal-website_thumbnail.jpeg';
import './projects.scss';

const Projects = () => {
  const PAGE_NAME = 'Projects';
  const PAGE_SUB_HEADER = 'A collection of the projects I have done so far.';

  const PROJECT_DAILY_CAKEY_BOT = {
    name: 'DailyCakeyBot',
    description: 'A simple for generating random dessert recipes',
    image: ThumbnailDailyCakeyBot,
    link: '/dailey-cakey-bot',
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

  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
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
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;

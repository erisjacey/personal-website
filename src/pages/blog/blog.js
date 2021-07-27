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
import BlogCard from 'myBlogComponents/blogCard';
import ThumbnailModuleReviews from 'myBlogAssets/module-reviews_thumbnail.jpeg';
import ThumbnailScubaDiving from 'myBlogAssets/scuba-diving_thumbnail.jpeg';
import ThumbnailTravel from 'myBlogAssets/travel_thumbnail.jpeg';
import ModuleReviews from './moduleReviews';
import ScubaDiving from './scubaDiving';
import Travel from './travel';
import './blog.scss';

const Blog = ({ path }) => {
  const PAGE_NAME = 'Blog';
  const PAGE_SUB_HEADER = 'Documentation of my hobbies, interests and miscellaneous topics.';

  const BLOG_SCUBA_DIVING = {
    name: 'Scuba Diving',
    description: 'The best hobby ever',
    image: ThumbnailScubaDiving,
    link: '/scuba-diving',
  };

  const BLOG_TRAVEL = {
    name: 'Travel',
    description: 'Photographs, videos and recounts',
    image: ThumbnailTravel,
    link: '/travel',
  };

  const BLOG_MODULE_REVIEWS = {
    name: 'Module Reviews',
    description: 'A collection of the reviews of the modules I completed in university',
    image: ThumbnailModuleReviews,
    link: '/module-reviews',
  };

  const BLOG = [
    BLOG_SCUBA_DIVING,
    BLOG_TRAVEL,
    BLOG_MODULE_REVIEWS,
  ];

  const renderBlogCards = () => (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {BLOG.map((project) => (
        <Grid item>
          <BlogCard
            name={project.name}
            image={project.image}
            description={project.description}
            link={`${path}${project.link}`}
            github={project.github}
          />
        </Grid>
      ))}
    </Grid>
  );

  const renderBlogPage = () => (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
      {renderBlogCards()}
    </div>
  );

  const renderBlog = (name, subHeader, Component) => (
    <div>
      <PageHeader name={name} subHeader={subHeader} />
      <Component />
    </div>
  );

  return (
    <div>
      <Switch>
        <Route exact path={path} component={renderBlogPage} />
        <Route
          path={`${path}${BLOG_SCUBA_DIVING.link}`}
          component={
            () => renderBlog(
              BLOG_SCUBA_DIVING.name,
              `${BLOG_SCUBA_DIVING.description}.`,
              ScubaDiving,
            )
          }
        />
        <Route
          path={`${path}${BLOG_TRAVEL.link}`}
          component={
            () => renderBlog(
              BLOG_TRAVEL.name,
              `${BLOG_TRAVEL.description}.`,
              Travel,
            )
          }
        />
        <Route
          path={`${path}${BLOG_MODULE_REVIEWS.link}`}
          component={
            () => renderBlog(
              BLOG_MODULE_REVIEWS.name,
              `${BLOG_MODULE_REVIEWS.description}.`,
              ModuleReviews,
            )
          }
        />
      </Switch>
    </div>
  );
};

Blog.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Blog;

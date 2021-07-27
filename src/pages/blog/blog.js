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
      {BLOG.map((blog) => (
        <Grid item>
          <BlogCard
            name={blog.name}
            image={blog.image}
            description={blog.description}
            link={`${path}${blog.link}`}
            github={blog.github}
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
          component={() => (
            <ScubaDiving
              path={`${path}${BLOG_SCUBA_DIVING.link}`}
              pageName={BLOG_SCUBA_DIVING.name}
              pageSubHeader={`${BLOG_SCUBA_DIVING.description}.`}
            />
          )}
        />
        <Route
          path={`${path}${BLOG_TRAVEL.link}`}
          component={() => (
            <Travel
              path={`${path}${BLOG_TRAVEL.link}`}
              pageName={BLOG_TRAVEL.name}
              pageSubHeader={`${BLOG_TRAVEL.description}.`}
            />
          )}
        />
        <Route
          path={`${path}${BLOG_MODULE_REVIEWS.link}`}
          component={() => (
            <ModuleReviews
              path={`${path}${BLOG_MODULE_REVIEWS.link}`}
              pageName={BLOG_MODULE_REVIEWS.name}
              pageSubHeader={`${BLOG_MODULE_REVIEWS.description}.`}
            />
          )}
        />
      </Switch>
    </div>
  );
};

Blog.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Blog;

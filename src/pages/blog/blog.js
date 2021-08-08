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
    component: ScubaDiving,
  };

  const BLOG_TRAVEL = {
    name: 'Travel',
    description: 'Photographs, videos and recounts',
    image: ThumbnailTravel,
    link: '/travel',
    component: Travel,
  };

  const BLOG_MODULE_REVIEWS = {
    name: 'Module Reviews',
    description: 'A collection of the reviews of the modules I completed in university',
    image: ThumbnailModuleReviews,
    link: '/module-reviews',
    component: ModuleReviews,
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

  return (
    <div>
      <Switch>
        <Route exact path={path} component={renderBlogPage} />
        {BLOG.map((blog) => (
          <Route
            path={`${path}${blog.link}`}
            component={() => (
              <blog.component
                path={`${path}${blog.link}`}
                pageName={blog.name}
                pageSubHeader={`${blog.description}.`}
              />
            )}
          />
        ))}
      </Switch>
    </div>
  );
};

Blog.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Blog;

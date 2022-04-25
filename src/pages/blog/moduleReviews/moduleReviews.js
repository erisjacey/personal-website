import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@mui/material';
import { LONG_DASH } from 'myConstants';
import PageHeader from 'myComponents/pageHeader';
import ItemCard from 'myComponents/itemCard';
import ThumbnailY1S1 from 'myBlogAssets/moduleReviews/y1s1_thumbnail.jpeg';
import ThumbnailY1S2 from 'myBlogAssets/moduleReviews/y1s2_thumbnail.jpeg';
import ThumbnailY2S1 from 'myBlogAssets/moduleReviews/y2s1_thumbnail.jpeg';
import ThumbnailY2S2 from 'myBlogAssets/moduleReviews/y2s2_thumbnail.jpeg';
import ThumbnailY3S1 from 'myBlogAssets/moduleReviews/y3s1_thumbnail.jpeg';
import ThumbnailY3S2 from 'myBlogAssets/moduleReviews/y3s2_thumbnail.jpg';
import Y1S1 from './y1s1';
import Y1S2 from './y1s2';
import Y2S1 from './y2s1';
import Y2S2 from './y2s2';
import Y3S1 from './y3s1';
import Y3S2 from './y3s2';
import './moduleReviews.scss';

const ModuleReviews = ({ path, pageName, pageSubHeader }) => {
  const { isDesktopView } = useSelector((state) => state.isDesktopView);
  const mobile = isDesktopView ? '' : '__mobile';

  const SEMESTER_Y1S1 = {
    name: 'Year 1, Semester 1',
    description: `Aug 2019 ${LONG_DASH} Dec 2019`,
    image: ThumbnailY1S1,
    link: '/y1s1',
    component: Y1S1,
  };

  const SEMESTER_Y1S2 = {
    name: 'Year 1, Semester 2',
    description: `Jan 2020 ${LONG_DASH} May 2020`,
    image: ThumbnailY1S2,
    link: '/y1s2',
    component: Y1S2,
  };

  const SEMESTER_Y2S1 = {
    name: 'Year 2, Semester 1',
    description: `Aug 2020 ${LONG_DASH} Dec 2020`,
    image: ThumbnailY2S1,
    link: '/y2s1',
    component: Y2S1,
  };

  const SEMESTER_Y2S2 = {
    name: 'Year 2, Semester 2',
    description: `Jan 2021 ${LONG_DASH} May 2021`,
    image: ThumbnailY2S2,
    link: '/y2s2',
    component: Y2S2,
  };

  const SEMESTER_Y3S1 = {
    name: 'Year 3, Semester 1',
    description: `Aug 2021 ${LONG_DASH} Dec 2021`,
    image: ThumbnailY3S1,
    link: '/y3s1',
    component: Y3S1,
  };

  const SEMESTER_Y3S2 = {
    name: 'Year 3, Semester 2',
    description: `Jan 2022 ${LONG_DASH} May 2022`,
    image: ThumbnailY3S2,
    link: '/y3s2',
    component: Y3S2,
  };

  const SEMESTERS = [
    SEMESTER_Y1S1,
    SEMESTER_Y1S2,
    SEMESTER_Y2S1,
    SEMESTER_Y2S2,
    SEMESTER_Y3S1,
    SEMESTER_Y3S2,
  ];

  const renderSemesterCards = () => (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      className="module-reviews__cards"
    >
      {SEMESTERS.map((semester) => (
        <Grid item>
          <ItemCard
            name={semester.name}
            image={semester.image}
            description={semester.description}
            link={`${path}${semester.link}`}
          />
        </Grid>
      ))}
    </Grid>
  );

  const renderModuleReviewsPage = () => (
    <div>
      <PageHeader name={pageName} subHeader={pageSubHeader} />
      {renderSemesterCards()}
    </div>
  );

  const renderSemesterPage = (name, subHeader, Component) => (
    <div>
      <PageHeader name={name} subHeader={subHeader} />
      <div className={`module-reviews__accordions${mobile}`}>
        <Component />
      </div>
    </div>
  );

  return (
    <div>
      <Switch>
        <Route exact path={path} component={renderModuleReviewsPage} />
        {SEMESTERS.map((semester) => (
          <Route
            path={`${path}${semester.link}`}
            component={
              () => renderSemesterPage(
                `${pageName} for ${semester.name}`,
                semester.description,
                semester.component,
              )
            }
          />
        ))}
      </Switch>
    </div>
  );
};

ModuleReviews.propTypes = {
  path: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  pageSubHeader: PropTypes.string.isRequired,
};

export default ModuleReviews;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Grid, Typography, Button, Link,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import './moduleReviewAccordion.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  tertiaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ModuleReviewAccordion = ({ module }) => {
  const classes = useStyles();

  const {
    name, code, faculty, prereqs, hasExam,
    link, assessment, review, grades,
  } = module;
  const { overview, workload, difficulty } = review;
  const { expectedGrade, actualGrade } = grades;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${code}-content`}
        id={`${code}-header`}
        className={classes.root}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={2}>
            <Typography className={classes.heading}>{code}</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography className={classes.secondaryHeading}>{name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.tertiaryHeading}>{faculty}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {overview}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

ModuleReviewAccordion.propTypes = {
  module: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    faculty: PropTypes.string,
    prereqs: PropTypes.string,
    hasExam: PropTypes.string,
    link: PropTypes.string,
    assessment: PropTypes.arrayOf({
      component: PropTypes.string,
      weightage: PropTypes.string,
    }),
    review: PropTypes.shape({
      overview: PropTypes.string,
      workload: PropTypes.shape({
        score: PropTypes.string,
        description: PropTypes.string,
      }),
      difficulty: PropTypes.shape({
        score: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
    grades: PropTypes.shape({
      expected: PropTypes.string,
      actual: PropTypes.string,
    }),
  }).isRequired,
};

export default ModuleReviewAccordion;

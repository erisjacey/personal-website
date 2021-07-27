import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion, AccordionDetails, AccordionSummary,
  List, ListItem, ListItemText,
  Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
  Grid, Typography, Button, Link, Paper,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import './moduleReviewAccordion.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  tertiaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.text.secondary,
  },
  sectionHeading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  sectionScore: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

const ModuleReviewAccordion = ({ module }) => {
  const classes = useStyles();

  const {
    name, code, faculty, prereqs, hasExam,
    link, assessment, review, grades,
  } = module;
  const { overview, workload, difficulty } = review;
  const { expected, actual } = grades;

  const renderTitle = (title) => (
    <Typography className={classes.sectionHeading}>
      {title}
    </Typography>
  );

  const renderScore = (score) => (
    <Typography className={classes.sectionScore}>
      {score}
    </Typography>
  );

  const renderText = (text) => (
    <Typography className={classes.sectionText}>
      {text}
    </Typography>
  );

  const renderExtraInfo = () => (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      className="module-review-accordion__section"
    >
      <Grid item className="module-review-accordion__section__title">
        {renderTitle('Extra Information')}
      </Grid>
      <Grid item>
        {renderText(`Prerequisites: ${prereqs}`)}
      </Grid>
      <Grid item>
        {renderText(`Exam: ${hasExam}`)}
      </Grid>
      <Grid item>
        {renderText(<Link href={link} color="secondary">Link to NUSMods</Link>)}
      </Grid>
    </Grid>
  );

  const renderAssessment = () => (
    <Grid
      container
      item
      direction="column"
      className="module-review-accordion__section"
    >
      <Grid item className="module-review-accordion__section__title">
        {renderTitle('Assessment')}
      </Grid>
      <Grid item>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography>
                    {renderText('Component')}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {renderText('Weightage')}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assessment.map((item) => (
                <TableRow key={item.component}>
                  <TableCell>
                    <Typography>
                      {renderText(item.component)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {renderText(item.weightage)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );

  const renderOverview = () => (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      className="module-review-accordion__section"
    >
      <Grid item className="module-review-accordion__section__title">
        {renderTitle('Overview')}
      </Grid>
      <Grid item className="module-review-accordion__section__text">
        {renderText(overview)}
      </Grid>
    </Grid>
  );

  const renderWorkload = () => (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      className="module-review-accordion__section"
    >
      <Grid item className="module-review-accordion__section__title">
        {renderTitle('Workload')}
      </Grid>
      <Grid item className="module-review-accordion__section__score">
        {renderScore(workload.score)}
      </Grid>
      <Grid item className="module-review-accordion__section__text">
        {renderText(workload.description)}
      </Grid>
    </Grid>
  );

  const renderDifficulty = () => (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      className="module-review-accordion__section"
    >
      <Grid item className="module-review-accordion__section__title">
        {renderTitle('Difficulty')}
      </Grid>
      <Grid item className="module-review-accordion__section__score">
        {renderScore(difficulty.score)}
      </Grid>
      <Grid item className="module-review-accordion__section__text">
        {renderText(difficulty.description)}
      </Grid>
    </Grid>
  );

  const renderGrade = () => (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      className="module-review-accordion__section"
    >
      <Grid item className="module-review-accordion__section__title">
        {renderTitle('Grade')}
      </Grid>
      <Grid item className="module-review-accordion__section__text">
        {renderText(`Expected: ${expected}`)}
      </Grid>
      <Grid item className="module-review-accordion__section__text">
        {renderText(`Actual: ${actual}`)}
      </Grid>
    </Grid>
  );

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
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          {renderExtraInfo()}
          {renderAssessment()}
          {renderOverview()}
          {renderWorkload()}
          {renderDifficulty()}
          {renderGrade()}
        </Grid>
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

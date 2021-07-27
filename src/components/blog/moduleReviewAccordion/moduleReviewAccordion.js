import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion, AccordionDetails, AccordionSummary,
  List, ListItem, ListItemText,
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
  const { expected, actual } = grades;

  const renderTitle = (title) => (
    <Typography>
      {title}
    </Typography>
  );

  const renderText = (text) => (
    <Typography>
      {text}
    </Typography>
  );

  const renderExtraInfo = () => (
    <List>
      <ListItem>
        {renderText(`Prerequisites: ${prereqs}`)}
      </ListItem>
      <ListItem>
        {renderText(`Exam: ${hasExam}`)}
      </ListItem>
      <ListItem>
        {renderText(<Link href={link}>Link to NUSMods</Link>)}
      </ListItem>
    </List>
  );

  const renderAssessment = () => (
    <List>
      <ListItem>
        {renderTitle('Assessment')}
      </ListItem>
      <ListItem>
        {renderText('Assessment')}
      </ListItem>
    </List>
  );

  const renderOverview = () => (
    <List>
      <ListItem>
        {renderTitle('Overview')}
      </ListItem>
      <ListItem>
        {renderText(overview)}
      </ListItem>
    </List>
  );

  const renderWorkload = () => (
    <List>
      <ListItem>
        {renderTitle('Workload')}
      </ListItem>
      <ListItem>
        {renderText(workload.score)}
      </ListItem>
      <ListItem>
        {renderText(workload.description)}
      </ListItem>
    </List>
  );

  const renderDifficulty = () => (
    <List>
      <ListItem>
        {renderTitle('Difficulty')}
      </ListItem>
      <ListItem>
        {renderText(difficulty.score)}
      </ListItem>
      <ListItem>
        {renderText(difficulty.description)}
      </ListItem>
    </List>
  );

  const renderGrade = () => (
    <List>
      <ListItem>
        {renderTitle('Grade')}
      </ListItem>
      <ListItem>
        {renderText(`Expected: ${expected}`)}
      </ListItem>
      <ListItem>
        {renderText(`Actual: ${actual}`)}
      </ListItem>
    </List>
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
        <List>
          <ListItem>
            {renderExtraInfo()}
          </ListItem>
          <ListItem>
            {renderAssessment()}
          </ListItem>
          <ListItem>
            {renderOverview()}
          </ListItem>
          <ListItem>
            {renderWorkload()}
          </ListItem>
          <ListItem>
            {renderDifficulty()}
          </ListItem>
          <ListItem>
            {renderGrade()}
          </ListItem>
        </List>
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

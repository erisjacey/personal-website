import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import {
  Grid,
} from '@material-ui/core';
import { LONG_DASH } from 'myConstants';
import EducationPaper from 'myEducationComponents/educationPaper';
import './education.scss';

const Education = () => {
  const PAGE_NAME = 'Education';
  const PAGE_SUB_HEADER = 'A brief history of the non-exciting parts of my growing years.';

  const EDUCATION_UNI = {
    type: 'University/College',
    school: {
      name: 'National University of Singapore',
      exam: 'B.Comp Computer Science (Hons)',
      years: `2019${LONG_DASH}present`,
      grade: 'Current CAP: 4.75/5.0',
    },
    image: 'Image',
    activities: [
      'NUS Rag & Flag 2019',
      'Computing Club',
      'NUS SoC e-FOP 2020',
      'Conducted CS2030/S & Java Workshop 2020',
    ],
    transcript: 'Transcript',
  };

  const EDUCATION_JC = {
    type: 'Junior College',
    school: {
      name: 'Anglo-Chinese Junior College',
      exam: '\'A\' Levels',
      years: `2015${LONG_DASH}2016`,
      grade: '5 Distinctions (H2 Physics, H2 Chemistry, H2 Math, H1 Project Work, H1 General Paper)',
    },
    image: 'Image',
    activities: [
      'ACJC Concert Band 2015',
    ],
    transcript: 'Transcript',
  };

  const EDUCATION_SEC = {
    type: 'Secondary School',
    school: {
      name: 'Fuhua Secondary School',
      exam: '\'O\' Levels',
      years: `2011${LONG_DASH}2014`,
      grade: 'L1R5 Raw: 7, Nett: 5',
    },
    image: 'Image',
    activities: [
      'Fuhua Symphonic Military Band 2011-2014, Band Major',
    ],
    transcript: 'Transcript',
  };

  const EDUCATION_PRI = {
    type: 'Primary (Elementary) School',
    school: {
      name: 'Shuqun Primary School',
      exam: 'Primary School Leaving Examination (PSLE)',
      years: `2005${LONG_DASH}2010`,
      grade: 'PSLE Score: 243',
    },
    image: 'Image',
    activities: [
      'Robotics Club 2007-2010',
    ],
    transcript: 'Transcript',
  };

  const EDUCATION = [
    EDUCATION_UNI,
    EDUCATION_JC,
    EDUCATION_SEC,
    EDUCATION_PRI,
  ];

  const renderEducationPapers = () => (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {EDUCATION.map((education) => (
        <Grid item>
          <EducationPaper
            type={education.type}
            school={education.school}
            image={education.image}
            activities={education.activities}
            transcript={education.transcript}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
      {renderEducationPapers()}
    </div>
  );
};

export default Education;

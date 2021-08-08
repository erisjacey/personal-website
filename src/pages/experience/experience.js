import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import {
  Grid,
} from '@material-ui/core';
import { LONG_DASH } from 'myConstants';
import ExperiencePaper from 'myExperienceComponents/experiencePaper';
import LogoMatchub from 'myExperienceAssets/matchub_logo.png';
import LogoNUS from 'myEducationAssets/nus_logo.png';
import TeachingFeedbackReportCS1101S from 'myExperienceAssets/cs1101s_teaching-feedback-report.pdf';
import TeachingFeedbackReportCS2030S from 'myExperienceAssets/cs2030s_teaching-feedback-report.pdf';
import './experience.scss';

const Experience = () => {
  const PAGE_NAME = 'Experience';
  const PAGE_SUB_HEADER = 'Perpetual hustle.';

  const EXPERIENCE_INTERNSHIP_MATCHUB = {
    name: 'MatcHub.co',
    role: 'Software Engineering Intern',
    duration: `Dec 2020${LONG_DASH}present`,
    image: LogoMatchub,
    skills: [
      'Full-Stack Web Development',
      'JavaScript',
      'React.js',
      'Python',
      'Django',
      'Git',
      'GitHub',
      'Docker',
      'Netlify',
      'AWS',
    ],
    description: [
      'Front-end development using React.js',
      'Back-end development using Django',
      'React libraries/frameworks used: Material-UI, Bootstrap, Axios',
      'Other tools used: Docker, GitHub, Netlify, AWS',
    ],
    link: {
      url: 'https://matchub.co/',
      name: 'Link to Website',
    },
  };

  const EXPERIENCE_INTERNSHIPS = [
    EXPERIENCE_INTERNSHIP_MATCHUB,
  ];

  const EXPERIENCE_TA_AY2021S1_CS1101S = {
    name: 'National University of Singapore',
    role: 'Teaching Assistant (CS1101S)',
    duration: `Aug 2020${LONG_DASH}Dec 2020`,
    image: LogoNUS,
    skills: [
      'JavaScript',
      'Functional Programming',
    ],
    description: [
      'Facilitate weekly 2-hour tutorial sessions for a group of 8 students',
      'Spearhead and foster community learning among said group',
      'Mark regularly-timed online assignments for students in said group',
    ],
    link: {
      url: TeachingFeedbackReportCS1101S,
      name: 'Teaching Feedback Report',
    },
  };

  const EXPERIENCE_TA_AY2021S2_CS2030S = {
    name: 'National University of Singapore',
    role: 'Teaching Assistant (CS2030S)',
    duration: `Jan 2021${LONG_DASH}Apr 2021`,
    image: LogoNUS,
    skills: [
      'Java',
      'Object-Oriented Programming',
      'Vim',
    ],
    description: [
      'Facilitate weekly 2-hour lab sessions for a group of 11 students',
      'Mark regularly-timed online lab assignments for students in said group',
    ],
    link: {
      url: TeachingFeedbackReportCS2030S,
      name: 'Teaching Feedback Report',
    },
  };

  const EXPERIENCE_TA = [
    EXPERIENCE_TA_AY2021S1_CS1101S,
    EXPERIENCE_TA_AY2021S2_CS2030S,
  ];

  const renderExperiencePapers = () => (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {EXPERIENCE_INTERNSHIPS.map((experience) => (
        <Grid item>
          <ExperiencePaper
            name={experience.name}
            role={experience.role}
            duration={experience.duration}
            image={experience.image}
            skills={experience.skills}
            description={experience.description}
            link={experience.link}
          />
        </Grid>
      ))}
      {EXPERIENCE_TA.map((experience) => (
        <Grid item>
          <ExperiencePaper
            name={experience.name}
            role={experience.role}
            duration={experience.duration}
            image={experience.image}
            skills={experience.skills}
            description={experience.description}
            link={experience.link}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
      {renderExperiencePapers()}
    </div>
  );
};

export default Experience;

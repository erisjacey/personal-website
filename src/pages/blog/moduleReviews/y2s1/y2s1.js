import React from 'react';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y2s1.scss';

const Y2S1 = () => {
  const LONG_DASH = '\u2014';

  const MODULE_CS2103T = {
    code: 'CS2103T',
    name: 'Software Engineering',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS1101S/programming-methodology',
    assessment: [
      {
        component: '',
        weightage: '',
      },
    ],
    review: {
      overview: 'Overview',
      workload: {
        score: '/10',
        description: 'Workload',
      },
      difficulty: {
        score: '/10',
        description: 'Difficulty',
      },
    },
    grades: {
      expected: '',
      actual: '',
    },
  };

  const MODULE_CS2100 = {
    code: 'CS2100',
    name: 'Computer Organisation',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS1101S/programming-methodology',
    assessment: [
      {
        component: '',
        weightage: '',
      },
    ],
    review: {
      overview: 'Overview',
      workload: {
        score: '/10',
        description: 'Workload',
      },
      difficulty: {
        score: '/10',
        description: 'Difficulty',
      },
    },
    grades: {
      expected: '',
      actual: '',
    },
  };

  const MODULE_ST2334 = {
    code: 'ST2334',
    name: 'Probability and Statistics',
    faculty: 'Statistics and Data Science',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS1101S/programming-methodology',
    assessment: [
      {
        component: '',
        weightage: '',
      },
    ],
    review: {
      overview: 'Overview',
      workload: {
        score: '/10',
        description: 'Workload',
      },
      difficulty: {
        score: '/10',
        description: 'Difficulty',
      },
    },
    grades: {
      expected: '',
      actual: '',
    },
  };

  const MODULE_CS2101 = {
    code: 'CS2101',
    name: 'Effective Communication for Computing Professionals',
    faculty: 'Center for Engl Lang Comms',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS1101S/programming-methodology',
    assessment: [
      {
        component: '',
        weightage: '',
      },
    ],
    review: {
      overview: 'Overview',
      workload: {
        score: '/10',
        description: 'Workload',
      },
      difficulty: {
        score: '/10',
        description: 'Difficulty',
      },
    },
    grades: {
      expected: '',
      actual: '',
    },
  };

  const MODULE_ES2660 = {
    code: 'ES2660',
    name: 'Communicating in the Information Age',
    faculty: 'Center for Engl Lang Comms',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS1101S/programming-methodology',
    assessment: [
      {
        component: '',
        weightage: '',
      },
    ],
    review: {
      overview: 'Overview',
      workload: {
        score: '/10',
        description: 'Workload',
      },
      difficulty: {
        score: '/10',
        description: 'Difficulty',
      },
    },
    grades: {
      expected: '',
      actual: '',
    },
  };

  const MODULES = [
    MODULE_CS2103T,
    MODULE_CS2100,
    MODULE_ST2334,
    MODULE_CS2101,
    MODULE_ES2660,
  ];

  const renderModules = () => (
    MODULES.map((module) => (
      <ModuleReviewAccordion module={module} />
    ))
  );

  return renderModules();
};

export default Y2S1;

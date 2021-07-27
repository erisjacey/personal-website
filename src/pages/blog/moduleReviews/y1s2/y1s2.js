import React from 'react';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y1s2.scss';

const Y1S2 = () => {
  const LONG_DASH = '\u2014';

  const MODULE_CS2030 = {
    code: 'CS2030',
    name: 'Programming Methodology II',
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

  const MODULE_CS2040S = {
    code: 'CS2040S',
    name: 'Data Structures and Algorithms',
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

  const MODULE_MA1101R = {
    code: 'MA1101R',
    name: 'Linear Algebra I',
    faculty: 'Mathematics',
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

  const MODULE_GES1021 = {
    code: 'GES1021',
    name: 'Natural Heritage of Singapore',
    faculty: 'Biological Sciences',
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

  const MODULE_GEQ1000 = {
    code: 'GEQ1000',
    name: 'Asking Questions',
    faculty: 'Office of Sr Dy Pres and Provost',
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
    MODULE_CS2030,
    MODULE_CS2040S,
    MODULE_MA1101R,
    MODULE_GES1021,
    MODULE_GEQ1000,
  ];

  const renderModules = () => (
    MODULES.map((module) => (
      <ModuleReviewAccordion module={module} />
    ))
  );

  return renderModules();
};

export default Y1S2;

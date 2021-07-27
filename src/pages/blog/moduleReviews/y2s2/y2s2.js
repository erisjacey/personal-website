import React from 'react';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y2s2.scss';

const Y2S2 = () => {
  const LONG_DASH = '\u2014';

  const MODULE_CS2105 = {
    code: 'CS2105',
    name: 'Introduction to Computer Networks',
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

  const MODULE_CS2106 = {
    code: 'CS2106',
    name: 'Introduction to Operating Systems',
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

  const MODULE_CS2102 = {
    code: 'CS2102',
    name: 'Database Systems',
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

  const MODULE_LSM1301 = {
    code: 'LSM1301',
    name: 'General Biology',
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

  const MODULE_ACC1701X = {
    code: 'ACC1701X',
    name: 'Accounting for Decision Makers',
    faculty: 'Accounting',
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
    MODULE_CS2105,
    MODULE_CS2106,
    MODULE_CS2102,
    MODULE_LSM1301,
    MODULE_ACC1701X,
  ];

  const renderModules = () => (
    MODULES.map((module) => (
      <ModuleReviewAccordion module={module} />
    ))
  );

  return renderModules();
};

export default Y2S2;

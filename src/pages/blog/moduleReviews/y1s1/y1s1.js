import React from 'react';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y1s1.scss';

const Y1S1 = () => {
  const LONG_DASH = '\u2014'

  const MODULE_CS1101S = {
    code: 'CS1101S',
    name: 'Programming Methodology',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS1101S/programming-methodology',
    assessment: [
      {
        component: 'Missions (Assignments)',
        weightage: '20%',
      },
      {
        component: 'Reflection (Recitation) and Studio (Tutorial) Attendance',
        weightage: '12%',
      },
      {
        component: 'Overall Studio (Tutorial) Participation',
        weightage: '2%',
      },
      {
        component: 'Reading Assessment 1',
        weightage: '6%',
      },
      {
        component: 'Midterm Exam',
        weightage: '12%',
      },
      {
        component: 'Reading Assessment 2',
        weightage: '6%',
      },
      {
        component: 'Practical Assessment',
        weightage: '12%',
      },
      {
        component: 'Final Exam',
        weightage: '30%',
      },
    ],
    review: {
      overview: 'Overview',
      workload: {
        score: '10/10',
        description: 'Workload',
      },
      difficulty: {
        score: '9/10',
        description: 'Difficulty',
      },
    },
    grades: {
      expected: 'A/A+',
      actual: 'A',
    },
  };

  const MODULE_CS1231S = {
    code: 'CS1231S',
    name: 'Discrete Structures',
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

  const MODULE_MA1521 = {
    code: 'MA1521',
    name: 'Calculus for Computing',
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

  const MODULE_IS1103 = {
    code: 'IS1103',
    name: 'Ethics in Computing',
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

  const MODULE_GER1000H = {
    code: 'GER1000H',
    name: 'Quantitative Reasoning',
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

  const MODULES = [
    MODULE_CS1101S,
    MODULE_CS1231S,
    MODULE_MA1521,
    MODULE_IS1103,
    MODULE_GER1000H,
  ];

  const renderModules = () => (
    MODULES.map((module) => (
      <ModuleReviewAccordion module={module} />
    ))
  );

  return renderModules();
};

export default Y1S1;

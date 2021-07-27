import React from 'react';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y1s1.scss';

const Y1S1 = () => {
  const LONG_DASH = '\u2014';

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
    link: 'https://nusmods.com/modules/CS1231S/discrete-structures',
    assessment: [
      {
        component: 'Tutorial Attendance',
        weightage: '5%',
      },
      {
        component: 'Assignments',
        weightage: '20%',
      },
      {
        component: 'Midterm Exam',
        weightage: '25%',
      },
      {
        component: 'Final Exam',
        weightage: '50%',
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
      expected: 'A-',
      actual: 'A',
    },
  };

  const MODULE_MA1521 = {
    code: 'MA1521',
    name: 'Calculus for Computing',
    faculty: 'Mathematics',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/MA1521/calculus-for-computing',
    assessment: [
      {
        component: 'Online Test',
        weightage: '20%',
      },
      {
        component: 'Final Exam',
        weightage: '80%',
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
      expected: 'A/A+',
      actual: 'A-',
    },
  };

  const MODULE_IS1103 = {
    code: 'IS1103',
    name: 'Ethics in Computing',
    faculty: 'Information Systems and Analytics',
    prereqs: LONG_DASH,
    hasExam: 'No',
    link: 'https://nusmods.com/modules/IS1103/ethics-in-computing',
    assessment: [
      {
        component: 'Forgot',
        weightage: 'lol%',
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
      expected: 'A',
      actual: 'A+',
    },
  };

  const MODULE_GER1000H = {
    code: 'GER1000H',
    name: 'Quantitative Reasoning',
    faculty: 'Office of Sr Dy Pres and Provost',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/GER1000H/quantitative-reasoning',
    assessment: [
      {
        component: 'Quizzes',
        weightage: '20%',
      },
      {
        component: 'Tutorial Participation',
        weightage: '10%',
      },
      {
        component: 'Group Project',
        weightage: '35%',
      },
      {
        component: 'Final Exam',
        weightage: '35%',
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
      expected: 'B+',
      actual: 'B (S/U option exercised)',
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

import React from 'react';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y2s2.scss';

const Y2S2 = () => {
  const LONG_DASH = '\u2014';

  const MODULE_CS2105 = {
    code: 'CS2105',
    name: 'Introduction to Computer Networks',
    faculty: 'Computing',
    prereqs: 'CS2040',
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS2105/introduction-to-computer-networks',
    assessment: [
      {
        component: 'Assignments',
        weightage: '23%',
      },
      {
        component: 'Mock Midterm Exam',
        weightage: '2%',
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
      expected: 'A',
      actual: 'B+',
    },
  };

  const MODULE_CS2106 = {
    code: 'CS2106',
    name: 'Introduction to Operating Systems',
    faculty: 'Computing',
    prereqs: 'CS2100',
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS2106/introduction-to-operating-systems',
    assessment: [
      {
        component: 'Tutorial Participation',
        weightage: '5%',
      },
      {
        component: 'Lab Assignments',
        weightage: '25%',
      },
      {
        component: 'Midterm Exam',
        weightage: '20%',
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
      actual: 'A-',
    },
  };

  const MODULE_CS2102 = {
    code: 'CS2102',
    name: 'Database Systems',
    faculty: 'Computing',
    prereqs: 'CS2030/CS2040, CS1231',
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS2102/database-systems',
    assessment: [
      {
        component: 'Tutorial Participation',
        weightage: '2%',
      },
      {
        component: 'Assignments',
        weightage: '10%',
      },
      {
        component: 'Team Project',
        weightage: '28%',
      },
      {
        component: 'Midterm Exam',
        weightage: '20%',
      },
      {
        component: 'Final Exam',
        weightage: '40%',
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
      actual: 'A',
    },
  };

  const MODULE_LSM1301 = {
    code: 'LSM1301',
    name: 'General Biology',
    faculty: 'Biological Sciences',
    prereqs: LONG_DASH,
    hasExam: 'No',
    link: 'https://nusmods.com/modules/LSM1301/general-biology',
    assessment: [
      {
        component: 'Online Tutorial',
        weightage: '5%',
      },
      {
        component: 'Assignment (Museum Visit)',
        weightage: '5%',
      },
      {
        component: 'Lab Assignments',
        weightage: '40%',
      },
      {
        component: 'E-Exam 1',
        weightage: '25%',
      },
      {
        component: 'E-Exam 2',
        weightage: '25%',
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
      actual: 'A-',
    },
  };

  const MODULE_ACC1701X = {
    code: 'ACC1701X',
    name: 'Accounting for Decision Makers',
    faculty: 'Accounting',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/ACC1701X/accounting-for-decision-makers',
    assessment: [
      {
        component: 'Class Participation',
        weightage: '20%',
      },
      {
        component: 'Group Project',
        weightage: '30%',
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
      expected: 'B',
      actual: 'C (S/U option exercised)',
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

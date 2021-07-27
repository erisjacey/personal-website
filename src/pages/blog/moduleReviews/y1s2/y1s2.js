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
    link: 'https://nusmods.com/modules/CS2030/programming-methodology-ii',
    assessment: [
      {
        component: 'Lab Assignments',
        weightage: '5%',
      },
      {
        component: 'Individual Project',
        weightage: '15%',
      },
      {
        component: 'Class Participation',
        weightage: '5%',
      },
      {
        component: 'Practical Assessment #1',
        weightage: '15%',
      },
      {
        component: 'Practical Assessment #2',
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
      expected: 'A-',
      actual: 'A',
    },
  };

  const MODULE_CS2040S = {
    code: 'CS2040S',
    name: 'Data Structures and Algorithms',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS2040S/data-structures-and-algorithms',
    assessment: [
      {
        component: 'Tutorial Participation',
        weightage: '10%',
      },
      {
        component: 'Problem Sets (Assignments)',
        weightage: '~35%',
      },
      {
        component: 'Midterm Exam',
        weightage: 'unknown%',
      },
      {
        component: 'Final Exam',
        weightage: 'unknown%',
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

  const MODULE_MA1101R = {
    code: 'MA1101R (MA2001)',
    name: 'Linear Algebra I',
    faculty: 'Mathematics',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/MA2001/linear-algebra-i',
    assessment: [
      {
        component: 'Homework Assignments',
        weightage: '16%',
      },
      {
        component: 'Computer Assignment',
        weightage: '4%',
      },
      {
        component: 'Midterm Exam',
        weightage: '20%',
      },
      {
        component: 'Final Exam',
        weightage: '60%',
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
      actual: 'A',
    },
  };

  const MODULE_GES1021 = {
    code: 'GES1021',
    name: 'Natural Heritage of Singapore',
    faculty: 'Biological Sciences',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/GES1021/natural-heritage-of-singapore',
    assessment: [
      {
        component: 'Group Poster',
        weightage: '20%',
      },
      {
        component: 'Discussion Form',
        weightage: '5%',
      },
      {
        component: 'Before & After Survey Participation',
        weightage: '5%',
      },
      {
        component: 'Online Quiz (MCQ)',
        weightage: '30%',
      },
      {
        component: 'Final Exam',
        weightage: '60%',
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
      actual: 'B+ (S/U option exercised)',
    },
  };

  const MODULE_GEQ1000 = {
    code: 'GEQ1000',
    name: 'Asking Questions',
    faculty: 'Office of Sr Dy Pres and Provost',
    prereqs: LONG_DASH,
    hasExam: 'No',
    link: 'https://nusmods.com/modules/GEQ1000/asking-questions',
    assessment: [
      {
        component: 'Quizzes (MCQ)',
        weightage: '36%',
      },
      {
        component: 'Forum Posts',
        weightage: '14%',
      },
      {
        component: 'Tutorial Attendance/Participation',
        weightage: '36%',
      },
      {
        component: 'Final Reflection Paper',
        weightage: '14%',
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
      expected: 'CS',
      actual: 'CS',
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

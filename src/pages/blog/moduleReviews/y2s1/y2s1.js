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
    link: 'https://nusmods.com/modules/CS2103T/software-engineering',
    assessment: [
      {
        component: 'Tutorial Participation',
        weightage: '5%',
      },
      {
        component: 'Individual Project',
        weightage: '20%',
      },
      {
        component: 'Team Project',
        weightage: '45%',
      },
      {
        component: 'Final Exam',
        weightage: '30%',
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

  const MODULE_CS2100 = {
    code: 'CS2100',
    name: 'Computer Organisation',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS2100/computer-organisation',
    assessment: [
      {
        component: 'Tutorial Attendance',
        weightage: '5%',
      },
      {
        component: 'Assignments',
        weightage: '12%',
      },
      {
        component: 'Labs',
        weightage: '13%',
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
      expected: 'A',
      actual: 'A-',
    },
  };

  const MODULE_ST2334 = {
    code: 'ST2334',
    name: 'Probability and Statistics',
    faculty: 'Statistics and Data Science',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/ST2334/probability-and-statistics',
    assessment: [
      {
        component: 'Online Quizzes',
        weightage: '30%',
      },
      {
        component: 'Final Exam',
        weightage: '70%',
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

  const MODULE_CS2101 = {
    code: 'CS2101',
    name: 'Effective Communication for Computing Professionals',
    faculty: 'Center for Engl Lang Comms',
    prereqs: LONG_DASH,
    hasExam: 'No',
    link: 'https://nusmods.com/modules/CS2101/effective-communication-for-computing-professionals',
    assessment: [
      {
        component: 'CA1 - Team Meeting',
        weightage: '15%',
      },
      {
        component: 'CA2 - Oral Presentation 1',
        weightage: '15%',
      },
      {
        component: 'CA3 - Oral Presentation 2',
        weightage: '20%',
      },
      {
        component: 'CA4 - User Guide',
        weightage: '20%',
      },
      {
        component: 'CA5 - Critical Reflection',
        weightage: '15%',
      },
      {
        component: 'Class Participation',
        weightage: '15%',
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

  const MODULE_ES2660 = {
    code: 'ES2660',
    name: 'Communicating in the Information Age',
    faculty: 'Center for Engl Lang Comms',
    prereqs: LONG_DASH,
    hasExam: 'No',
    link: 'https://nusmods.com/modules/ES2660/communicating-in-the-information-age',
    assessment: [
      {
        component: 'CA1 - Story Retelling',
        weightage: '5%',
      },
      {
        component: 'CA2 - Group Project (a) - Project Paper',
        weightage: '15%',
      },
      {
        component: 'CA2 - Group Project (b) - Oral Presentation',
        weightage: '10%',
      },
      {
        component: 'CA3 - Panel Discussion',
        weightage: '10%',
      },
      {
        component: 'CA4 - Position Paper',
        weightage: '30%',
      },
      {
        component: 'CA5 - Wild Cards',
        weightage: '15%',
      },
      {
        component: 'Class Participation',
        weightage: '15%',
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

/* eslint-disable no-multi-str */
import React from 'react';
import { LONG_DASH } from 'myConstants';
import Document from 'myComponents/document';
import TextBlock from 'myComponents/textBlock';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y3s2.scss';

const Y3S2 = () => {
  const MODULE_CS3230 = {
    code: 'CS3230',
    name: 'Design and Analysis of Algorithms',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS3230/design-and-analysis-of-algorithms',
    assessment: [
      {
        component: LONG_DASH,
        weightage: LONG_DASH,
      },
    ],
    review: {
      overview: LONG_DASH,
      workload: {
        score: LONG_DASH,
        description: LONG_DASH,
      },
      difficulty: {
        score: LONG_DASH,
        description: LONG_DASH,
      },
    },
    grades: {
      expected: LONG_DASH,
      actual: LONG_DASH,
    },
  };

  const MODULE_CS3247 = {
    code: 'CS3247',
    name: 'Game Development',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS3247/game-development',
    assessment: [
      {
        component: LONG_DASH,
        weightage: LONG_DASH,
      },
    ],
    review: {
      overview: LONG_DASH,
      workload: {
        score: LONG_DASH,
        description: LONG_DASH,
      },
      difficulty: {
        score: LONG_DASH,
        description: LONG_DASH,
      },
    },
    grades: {
      expected: LONG_DASH,
      actual: LONG_DASH,
    },
  };

  const MODULE_CS3211 = {
    code: 'CS3211',
    name: 'Parallel and Concurrent Programming',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS3211/parallel-and-concurrent-programming',
    assessment: [
      {
        component: LONG_DASH,
        weightage: LONG_DASH,
      },
    ],
    review: {
      overview: LONG_DASH,
      workload: {
        score: LONG_DASH,
        description: LONG_DASH,
      },
      difficulty: {
        score: LONG_DASH,
        description: LONG_DASH,
      },
    },
    grades: {
      expected: LONG_DASH,
      actual: LONG_DASH,
    },
  };

  const MODULE_GET1018 = {
    code: 'GET1018',
    name: 'The Mathematics of Games',
    faculty: 'Mathematics',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/GET1018/the-mathematics-of-games',
    assessment: [

    ],
    review: {
      overview: LONG_DASH,
      workload: {
        score: LONG_DASH,
        description: LONG_DASH,
      },
      difficulty: {
        score: LONG_DASH,
        description: LONG_DASH,
      },
    },
    grades: {
      expected: LONG_DASH,
      actual: LONG_DASH,
    },
  };

  const MODULES = [
    MODULE_CS3230,
    MODULE_CS3247,
    MODULE_CS3211,
    MODULE_GET1018,
  ];

  const renderModules = () => (
    MODULES.map((module) => (
      <ModuleReviewAccordion module={module} />
    ))
  );

  const ComingSoon = () => (
    <TextBlock
      heading="Note"
      body={[
        'Module reviews will be up once the semester has ended :)',
      ]}
    />
  );

  return (
    <div>
      <ComingSoon />
      {renderModules()}
    </div>
  );
};

export default Y3S2;

/* eslint-disable no-multi-str */
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
      overview: 'By far my favourite module even till now. \
                The module is taught using a language called Source, a Javascript sublanguage based on the Structure and Interpretation of Computer Programs (SICP), \
                an online course published by MIT which provides a thorough introduction to computational thinking. \
                You are introduced to typical programming concepts like recursion, loops and higher-order functions, \
                data structures like lists and arrays, \
                algorithms like searching and sorting, \
                and higher-level constructs like memoization.',
      workload: {
        score: '9/10',
        description: 'This module has an insane workload, as is typical for a CS module. \
                     Expect little to no hand holding right from the get-go. \
                     Recursion is taught in as early as early as Week 2, and the pace never really lets up from then on. \
                     There are even a few points in time where you are bombarded with as many as three missions (assignments) in as week. \
                     That being said, this module can be very rewarding. \
                     It is the epitome of "you get what you give". \
                     Put in the right amount of (insane) effort, and you will have a very strong foundation of programming.',
      },
      difficulty: {
        score: '9/10',
        description: 'Can be extremely daunting even for students with programming experience, and especially so for those without. \
                     Unless you are a CS prodigy, expect to have to spend a significant amount of time outside lessons to grasp the concepts taught. \
                     The difficulty curve spikes insanely high in Week 2 when recursion is introduced, \
                     and continues to do so for the first half of the semester when you are quite limited in how to solve the various problems. \
                     It gradually gets more manageable in the second half when more intuitive and familiar concepts like loops are taught and can be incorporated instead.',
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
      overview: 'One of the more math-y CS modules. \
                A lot of its problems are centered around mathematical proofs, which you are going to have to get used to if you want to score well for this module. \
                The first few weeks are spent on propositional logic and proving methods. \
                Subsequently, you are taught topics like sets and functions, number theory and graph theory.',
      workload: {
        score: '8/10',
        description: 'There were only two assignments for this module across the semester and, as far examinations go, only a Midterm and Final Exam. \
                     However, the bulk of your time spent on this module will likely be from digesting and revising the concepts taught. \
                     While CS1101S has workload spikes every now and then, this module is more consistent in its content delivery, and that\'s not necessarily a good thing. \
                     Each week is, on average, just as heavy as the last, and the one after it.',
      },
      difficulty: {
        score: '9/10',
        description: 'Another difficult CS module, but it challenges you in a way atypical of one. \
                     While most CS modules test your computational thinking, this module tests your ability to solve (mostly) mathematical problems in a logical fashion. \
                     While most students should have been exposed to some form of mathematics till now, discrete math may be something they have not seen before, \
                     so the topics taught may not be the most intuitive to grasp. I personally spent a long time digesting number theory, \
                     and I\'m pretty sure I\'m still bad at it right now.',
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
      overview: 'Pretty much a re-introduction of calculus topics taught in JC, and then a few more added on top just to make it a "complete" module. \
                Topics that are taught include basic differentiation and integration, series, partial differentiation, double integrals, and differential equations.',
      workload: {
        score: '4/10',
        description: 'Pretty negligible workload considering very the few assessments and no assignments. \
                     You just have to stay on top of the weekly lectures. \
                     Tutorials might not even be necessary if you have a strong enough grasp (or enough experience) on calculus. \
                     Some weeks (usually the last few) don\'t even have new concepts being taught; \
                     they are usually reserved for revision.',
      },
      difficulty: {
        score: '4/10 for understanding, 10/10 for tests',
        description: 'The concepts taught in the module are not the most difficult to learn well, but the real difficulty of this module lies in its tests. \
                     Anecdotally, the final exam can go one of two ways: either it\'s really easy and the bell curve is really steep, \
                     or it\'s really difficult and only the really smart (or lucky) students can score well. \
                     Just do as many practice papers as you can in preparation for the exam and hope for the best.',
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
      overview: 'This module goes through a complete structural overhaul frequently enough that a personal recount of someone who has done it earlier is likely to be obsolete. \
                However, what remains consistent is its terrible reputation among the student populace. \
                We are supposed to be taught about technology and the ramifications of its abuse. \
                How this (is attempted to be) done differs from semester to semester.',
      workload: {
        score: '5/10',
        description: 'Personally, my workload only came in short bursts every two weeks or so, with one major spike (a ~4k word essay!) in my final week, so it wasn\'t too bad. \
                     From what I\'ve heard of the subsequent semesters, they were pretty similar as well, with the difference being that their final week deliverable was even crazier than mine. \
                     Again, your mileage may vary in a different semester.',
      },
      difficulty: {
        score: '5/10',
        description: 'The essay readings to be done were immensely dry, but ultimately still relatively digestible. \
                     The real challenge, however, comes from scoring well for the module. \
                     A big reason why this module gets a bad rep is from its inability to accurately assess a student and give him his deserved score. \
                     You have students putting in their 100% effort and getting a C, \
                     and you have those pulling last-minute submissions and getting an A. \
                     This is what your S/Us are here for, though.',
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
      overview: 'I don\'t remember anything that was taught in this module because I paid 0 attention to it.',
      workload: {
        score: '0/10',
        description: 'Okay but seriously, you should approach other seniors for more useful information about this module.',
      },
      difficulty: {
        score: '2/10',
        description: 'The hard part was last-minute cramming for the Final exam so that I got a good enough grade to S/U the module.',
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

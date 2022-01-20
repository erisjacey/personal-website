/* eslint-disable no-multi-str */
import React from 'react';
import { LONG_DASH } from 'myConstants';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y3s1.scss';

const Y3S1 = () => {
  const MODULE_CS3241 = {
    code: 'CS3241',
    name: 'Computer Graphics',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS3241/computer-graphics',
    assessment: [
      {
        component: 'Tutorial Attendance',
        weightage: '5%',
      },
      {
        component: 'Lab Assignments (4 in total)',
        weightage: '30%',
      },
      {
        component: 'Midterm Exam',
        weightage: '25%',
      },
      {
        component: 'Final Exam',
        weightage: '40%',
      },
    ],
    review: {
      overview: 'A relatively broad and well-structured introduction to computer graphics, \
                with a specific focus on real-time interactive 3D computer graphics, using OpenGL 2.0 as a teaching and learning tool. \
                Core topics taught include the OpenGL programming, the 3D rendering pipeline (vertex processing, rasterizing, etc.), \
                illumination, texture mapping, and even ray tracing. \
                The fundamentals of graphics are built on surprisingly hefty mathematical roots, \
                so expect to have to recall concepts such as geometry, linear algebra (matrix manipulation) and trigonometry. \
                If you enjoy and are good at high school math, you will probably like this module. \
                Otherwise, you might find some of the content pretty dry.',
      workload: {
        score: '6/10',
        description: 'This module was admittedly one of the lighter CS modules despite being labelled as a level-3000 module. \
                     There are only 4 assignments in total, all of which are pretty guided. \
                     The skeleton code is there and some of it is already half-complete, \
                     and your only job is to apply what has been taught to complete the relevant incomplete parts. \
                     Lectures and tutorials are pretty easy-going; \
                     the content is light enough that there were (from what I could recall) 2 weeks of non-examinable content.',
      },
      difficulty: {
        score: '7/10',
        description: 'Again, a not-so-strong background in math might make this module more difficult than it should be. \
                     However, I would assume that most people will find this module rather manageable. \
                     On top of this, the exams (both midterm and final) are set to be open book, \
                     so memorisation is not even necessary; understanding is the focus here. \
                     Expect the bell curve then to be quite steep, however.',
      },
    },
    grades: {
      expected: 'A/A+',
      actual: 'A-',
    },
  };

  const MODULE_CS3210 = {
    code: 'CS3210',
    name: 'Parallel Computing',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS3210/parallel-computing',
    assessment: [
      {
        component: 'Labs (3 lab sheets, 4 quizzes)',
        weightage: '10%',
      },
      {
        component: 'Programming Assignments (3 in total)',
        weightage: '35%',
      },
      {
        component: 'Midterm Exam',
        weightage: '15%',
      },
      {
        component: 'Final Exam',
        weightage: '40%',
      },
    ],
    review: {
      overview: 'This module serves as a comprehensive introduction to the field of parallel programming, \
                and can be split into four major parts: parallel architectures, parallel computation models, \
                paralel algorithm design and programming, and performance of parallel programs. \
                You are given hands-on opportunities to work on real parallel machines. \
                In terms of frameworks, you will learn how to program (in C) using OpenMP (shared memory systems), \
                CUDA (GPGPU programming), and MPI (distributed systems), in that order. \
                I personally found the module pretty confusing at times and one of the more difficult but useful \
                modules at the same time.',
      workload: {
        score: '8/10',
        description: 'There are weekly 2-hour lab/tutorial sessions (either/or), and there usually \
                     is a graded deliverable in the form of a lab sheet/quiz (respectively). \
                     On top of these, the three assignments, each of which is done in one of the three frameworks mentioned, \
                     are personally a handful, and it took me a while just to understand the initial codebase \
                     (my proficiency in C was admittedly not that strong). Expect the workload to be heavy on the whole, \
                     although your mileage may vary depending on how comfortable you are with C and with \
                     parallel implementations.',
      },
      difficulty: {
        score: '8/10',
        description: 'As mentioned, I found the content to be sometimes a bit too heavy-handed. \
                     Some topics felt like a pure information dump, and some even felt dry \
                     (I\'m looking at you, performance and performance instrumentation). \
                     However, I will admit that seeing your programs run on the various parallel machines \
                     with significant speedup compared to sequential solutions is a really cool feeling, \
                     and almost makes the drier and confusing parts of the module worth stomaching. \
                     Almost.',
      },
    },
    grades: {
      expected: 'A-',
      actual: 'B+',
    },
  };

  const MODULE_CS2104 = {
    code: 'CS2104',
    name: 'Programming Language Concepts',
    faculty: 'Computing',
    prereqs: LONG_DASH,
    hasExam: 'Yes',
    link: 'https://nusmods.com/modules/CS2104/programming-language-concepts',
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
      expected: 'A-',
      actual: 'A+',
    },
  };

  const MODULE_LAF1201 = {
    code: 'LAF1201',
    name: 'French 1',
    faculty: 'Centre for Language Studies',
    prereqs: LONG_DASH,
    hasExam: 'No',
    link: 'https://nusmods.com/modules/LAF1201/french-1',
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
      expected: 'A+',
      actual: 'A+',
    },
  };

  const MODULE_GEH1009 = {
    code: 'GER1000H',
    name: 'Framing Bollywood: Unpacking the Magic',
    faculty: 'South Asian Studies',
    prereqs: LONG_DASH,
    hasExam: 'No',
    link: 'https://nusmods.com/modules/GEH1009/framing-bollywood-unpacking-the-magic',
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
      actual: 'B+ (S/U option exercised)',
    },
  };

  const MODULES = [
    MODULE_CS3241,
    MODULE_CS3210,
    MODULE_CS2104,
    MODULE_LAF1201,
    MODULE_GEH1009,
  ];

  const renderModules = () => (
    MODULES.map((module) => (
      <ModuleReviewAccordion module={module} />
    ))
  );

  return renderModules();
};

export default Y3S1;

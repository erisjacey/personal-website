/* eslint-disable no-multi-str */
import React from 'react';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y1s2.scss';

const Y1S2 = () => {
  const LONG_DASH = '\u2014';

  const MODULE_CS2030 = {
    code: 'CS2030',
    name: 'Programming Methodology II',
    faculty: 'Computing',
    prereqs: 'CS1010',
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
      overview: 'A pretty good introduction to object-oriented programming (OOP), \
                with a pretty heavy emphasis on Java (primarly an OOP-centric language). \
                The first half of the module (before recess week) is be spent on OOP principles, \
                like abstraction, encapsulation, inheritance and polymorphism, as well as \
                Java quirks like generics and static symbols. \
                The second half is spent on functional programming concepts, \
                like lambdas, infinite lists and streams.',
      workload: {
        score: '8/10',
        description: 'The weekly lab assignments are split into several levels (usually five), \
                     and each level builds on top of the last in terms of complexity and difficulty. \
                     They can be time-consuming, although completing them usually means you are done with this module for the week. \
                     The (individual) project component is separated into three stages throughout the semester, \
                     and is a major hassle (at least it was for me). \
                     Take special care to adhere to good OOP principles in the earlier stages to make your life much easier later on. \
                     I had to waste a lot of time refactoring in stage two of the project because I realised my code wasn\'t "good enough".',
      },
      difficulty: {
        score: '9/10',
        description: 'The concepts were relatively intuitive enough to understand, but the labs based on them are made a lot harder. \
                     The same can be said for the exams as well. \
                     They kind of help you become programmers by forcing you to work harder to complete them though.',
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
    prereqs: 'CS1231, CS1010',
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
      overview: 'A very comprehensive introduction to data structures and algorithms. \
                Typical DSA topics included are complexity analysis, sorting, trees (BSTs, AVL, etc.), hash tables, graphs and dynamic programming. \
                While the breadth of the module is relatively large, depth is not compromised as well, \
                as each topic includes a bunch of other subtopics as well. \
                For example, under graphs you learn about quite a few traversal algorithms in great detail. \
                You should absolutely work hard for this module because it is probably the most relevant when it comes to acing your future technical interviews.',
      workload: {
        score: '8/10',
        description: 'The weekly tutorials were two hours long, and in order to cover all the lecture material, \
                     there were three hours worth of lectures each week. \
                     The given problem sets (assignments) shouldn\'t be too difficult to complete, \
                     unless you intend to complete the much harder optional tasks. \
                     Most of your time spent on this module will probably be to attending the million hours of lessons and studying for the exam.',
      },
      difficulty: {
        score: '9/10',
        description: 'The depth of this module is probably far greater than that of the typical DSA online courses, \
                     and the exam questions covered are probably a lot worse than the LeetCode questions you might have come across before. \
                     That being said, overcoming knowledge gaps in and studying well for this module is probably one of the more rewarding endeavours, \
                     because of how many higher level CS modules depend on data structures and algorithms, \
                     and how important this field in CS is in general anyway.',
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
      overview: 'A deceptively intense module for a non-CS module that can be S/U\'d. \
                You learn about things like linear systems (row-echelon forms, etc.), matrices, vector spaces, orthogonality, diagonalization and linear transformation. \
                Exam questions come in one of two forms: mechanical (computational) variants, or proving questions. \
                There will probably be more of the latter if the Prof in your semester allows the use of a scientific calculator.',
      workload: {
        score: '8/10',
        description: 'The assignments for this module aren\'t too time-consuming, \
                     and are pretty much a straightforward application of the concepts taught. \
                     However, doing well for the module will have to probably involve lots of practice, \
                     so most of your time will go towards that.',
      },
      difficulty: {
        score: '7/10',
        description: 'Coming into the semester, I was told to give this module huge caution because of how bad it can be. \
                     I personally would not necesarily agree with that sentiment. \
                     With enough practice and effort, it shouldn\'t be too hard to ace this module.',
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
      overview: 'One of the more interesting (or least bland) GES modules in my opinion. \
                You learn about the various habitats in Singapore, \
                including forests (primary, secondary, coastal, etc.), inter- and sub-tidal habitats, \
                as well as human-centric topics like waste and reclaimed land, and managed habitats. \
                There is a group project component in which you have to design a poster about any habitat in Singapore, \
                centering around various native species there. \
                A field trip to that habitat is therefore a must, so I guess that can be fun.',
      workload: {
        score: '7/10',
        description: 'Probably one of the more content-heavy GE modules, with two lectures a week. \
                     It shouldn\'t be too bad if you are consistent with watching the lectures released in that same week though. \
                     Don\'t be like me and decide to leave everything to reading week, ending up having to cram 22 (!!!) lectures in a few days. \
                     Not fun.',
      },
      difficulty: {
        score: '8/10',
        description: 'The content covered is very cookie-cutter and digestible. \
                     However, the exam format will most likely be a bunch of MCQ questions, \
                     and the recall-heavy nature of the questions likely means the bell curve is really steep. \
                     While the exam is open-book, this means that wanting to do well for the module would probably involve going the extra mile \
                     and remembering at least some of the content and not having to rely mostly on notes during the paper itself.',
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
      overview: 'I can\'t remember anything for this module besides its name and module code. \
                Cherish the semester you take this module in, \
                you likely won\'t get free 4 MCs anywhere else. \
                It would probably be wise to overload this semester, \
                especially if you\'re still in your first year.',
      workload: {
        score: '0/10',
        description: 'Just do enough to pass. I didn\'t attend a single one of my tutorials (I went to my friend\'s slot for some of the lessons), \
                     and didn\'t do the final reflection paper, and still managed to get a CS.',
      },
      difficulty: {
        score: '0/10',
        description: 'Negligible. This should actually be a 1 MC module.',
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

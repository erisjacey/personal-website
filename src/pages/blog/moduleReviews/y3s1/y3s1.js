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
        component: 'Tutorial Participation',
        weightage: '10%',
      },
      {
        component: 'Lab Assignments',
        weightage: '35%',
      },
      {
        component: 'Quizzes/Tests',
        weightage: '15%',
      },
      {
        component: 'Final Exam',
        weightage: '40%',
      },
    ],
    review: {
      overview: 'This module serves a broad revision and introduction to key concepts ubiquitous across the more popular programming languages. \
                In order, you will learn more about functional programming in Haskell (monads!), logic programming in Prolog, \
                imperative programming in OCaml, and then object-oriented programming in Scala. \
                A good part of the module was spent on Haskell (the first half of the sem), so it feels like the latter paradigms \
                were spread a bit too thin. This module has been criticised for its poor structure as well, \
                and while I personally didn\'t mind it because I liked the concepts taught, be sure to factor this \
                in mind if you are interested in taking it as well.',
      workload: {
        score: '6/10',
        description: 'For better or worse, the structure of the module made it such that there were so few assignments, \
                     I actually spent the least time on this module overall this sem. Not a lot of supplementary materials \
                     provided means that if you wanted to solidify your understanding on the concepts taught, you would have to \
                     go out of your way to learn them through external sources (YouTube, Stack Overflow, etc.). Besides that, \
                     however, I wouldn\'t say this module is very heavy.',
      },
      difficulty: {
        score: '8/10',
        description: 'The concepts taught sometimes took some time to grasp, but I honestly think they were helpful \
                     in understanding and appreciating the more common programming paradigms. Haskell and especially Prolog \
                     were languages that initially felt really foreign, but they have kind of grown on me. \
                     The (midterm) quiz and final exam were substantially difficult, and essentially felt like \
                     a CS1101S paper, only set in Haskell, etc. instead of in JavaScript.',
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
        component: 'Tests (2 grammar, 2 writing, 2 reading comprehension)',
        weightage: '30%',
      },
      {
        component: 'Oral (1 speaking assignment, 1 speaking test, 2 listening comprehension tests)',
        weightage: '40%',
      },
      {
        component: 'Quizzes (2 vocabulary recap)',
        weightage: '10%',
      },
      {
        component: 'Homework (2 in total)',
        weightage: '15%',
      },
      {
        component: 'Attendance and Participation',
        weightage: '5%',
      },
    ],
    review: {
      overview: 'I actually enjoyed this module more than I thought I\'d thought I would! \
                My sole experience with learning new languages (Chinese...) has been painful to say the least, \
                so picking up French in contrast felt like a breath of fresh air. \
                Every lesson was enjoyable, and learning the language was fun enough for me to practise it \
                every single day outside of lesson time. I would highly recommend taking this module \
                (or an introductory course to any new language you might be interested in) \
                to take advantage of your time here at NUS.',
      workload: {
        score: '9/10',
        description: 'This rating is way more subjective than that for other modules, because I think \
                     your mileage greatly depends on how much work you are willing to put in. \
                     Simply going for and participating actively in lessons will probably get you by just fine, \
                     but personally, you can add a lot of value for practising in your own time as well. \
                     I spent up to an hour every day on Duolingo to supplement the things taught during class, \
                     and this made me feel a lot more comfortable with the course topics and during class itself.',
      },
      difficulty: {
        score: '4/10',
        description: 'Another subjective rating depending on how comfortable you are with picking up the quirks and \
                     idiosyncracies of a new language. Also, as mentioned, putting in the time to practise French \
                     will probably make learning it in the long run much easier.',
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
        component: 'Discussion Group Attendance and Participation',
        weightage: '10%',
      },
      {
        component: 'Group Presentation',
        weightage: '20%',
      },
      {
        component: 'Written Assignments (2 film analyses)',
        weightage: '70%',
      },
    ],
    review: {
      overview: 'This module felt like a fun contrast from the usual technical classes I have been accustomed to take. \
                It revolves around analysing social and political developments in India through Bollywood cinema. \
                Each week hones in on a particular theme in Bollywood cinema, including topics such as \
                romance and family, religion, sport, and gender. \
                Case studies in the form of films that touch upon one or some of these topics were covered \
                during weekly lectures and readings and were for the most part interesting. \
                By far the best part about the module was watching a movie each week as part of the course material.',
      workload: {
        score: '6/10',
        description: 'The only major parts of this module included the two film analysis essays and the group presentation. \
                     Each of them took a substantial amount of time to complete and refine for the one week prior to which it was due. \
                     The weekly readings would take some time to digest, but quite a number of them are unavoidable as its content \
                     were necessary to include and reference in the three deliverables mentioned. \
                     Finally, while the weekly movie assignments were enjoyable to watch, they were not only longer than your \
                     average Hollywood flick, you could not blindly watch them either, and you had to analyse them even while watching.',
      },
      difficulty: {
        score: '6/10',
        description: 'I was not used to the style of the typical social sciences module and the readings and essay assignments that \
                     came along with it. Bollywood cinema also felt very foreign to me, and so coming up with substantial points \
                     when I was writing the essays took me some time and effort (and a lot of Google tabs).',
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

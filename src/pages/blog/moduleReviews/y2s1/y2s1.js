/* eslint-disable no-multi-str */
import React from 'react';
import { LONG_DASH } from 'myConstants';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y2s1.scss';

const Y2S1 = () => {
  const MODULE_CS2103T = {
    code: 'CS2103T',
    name: 'Software Engineering',
    faculty: 'Computing',
    prereqs: 'CS2030, CS2040',
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
      overview: 'A pretty heavy-handed introduction to software engineering. \
                Each week, you are taught a bunch of SWE principles, including (but definitely not limited to): \
                coupling, cohesion, SLAP, SOLID, and many, MANY, more. \
                You also learn about tools for software development, like UML. \
                These are supplemented by two projects you have to do. \
                The first one is the individual project in the first half of the semester, \
                and it involves you creating a simple chat bot from scratch, a la a greenfield project. \
                The second one is the team project in the second half of the semester, \
                and for it you are required to work on an existing Address Book application, \
                and improve on it by extending/modifying its functionality and appearance. \
                Both projects are implemented in Java.',
      workload: {
        score: '10/10',
        description: 'Weekly content. Weekly lectures and tutorials. \
                     Very frequent team meetings and a lot of time spent on the projects. \
                     Oh, and did I mention that there is a practical exam, AND final exam to prepare for? \
                     Probably the most time-consuming CS module in your first two years. \
                     There is a caveat though: this module is the epitome of "you get what you give". \
                     You can actually choose to spend little effort (and time) into this module, \
                     and you will still be able to pass it. \
                     However, because the projects have very low stakes (the worst you get is a bad grade), \
                     the best time to make the typical SWE mistakes and learn as much as possible through practice would probably be here, \
                     which is why I would suggest putting in at least some effort for this module. \
                     It is probably worth it in the long run.',
      },
      difficulty: {
        score: 'ranges/10',
        description: 'Because of the open-ended nature of this module, its difficulty isn\'t fixed. \
                     Choosing to make your project simple would make the module seem easier than others would perceive it in comparison, \
                     while opting for implementing advanced and cool features would make it seem like it should be a 5 or 6 MC module. \
                     The SWE principles you are taught "on the side" aren\'t too difficult to grasp, \
                     and for the most part are fairly intuitive. \
                     The differentiating factor for those who get A\'s for this module probably lies in the project component. \
                     So to get a good grade, you would probably need to put in the effort there. \
                     Also, because the team project involves working with other students, \
                     you might have an easier time with more cooperative (and/or capable) teammates. \
                     You probably will be able to choose who they are at the beginning of the semester, \
                     so choose wisely.',
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
    prereqs: 'CS1010',
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
      overview: 'This module feels like a crash course into very low-level computer programming. \
                You are first exposed to C programming, one of the lowest-level "high-level" programming languages, \
                then "eased into" assembly language, which is probably as low-level as it gets when it comes to programming \
                (aside from actual binary code). \
                Throughout the semester, you will familiarise yourself with topics such as \
                data representation, CPU execution cycles (using MIPS as a case study), pipelining, \
                and combinational and sequential circuits (using logic gates, etc.).',
      workload: {
        score: '8/10',
        description: 'The content taught can be quite overwhelming, so there should be at least some consistent effort each week to digest it. \
                     There are weekly lab assignments, which shouldn\'t take too long to complete. \
                     There are also a few homework assignments (in the form of quizzes), which again aren\'t too bad, \
                     the only caveat being they\'re so easy you probably should have friends to discuss them with \
                     in order to not fall behind the (probably insanely high) average score. \
                     Most of your time spent on this module will probably come from simply attending the many lessons \
                     and studying the content as opposed to completing the various deliverables.',
      },
      difficulty: {
        score: '7/10',
        description: 'This module is honestly pretty manageable in terms of difficulty. \
                     Again, however, in order to get a good grade, you will probably have to put in a little more effort than the rest of the cohort \
                     to pull ahead of the bell curve, which might be pretty steep. \
                     That being said, depending on who is conducting the module, the exams might be insanely difficult, \
                     so you might want to prepare for that possibility as well.',
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
    prereqs: 'MA1521',
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
      overview: 'Another JC-like module! A lot of the topics taught here were covered in H2 Math. \
                They include the basic probability concepts, conditional probability, permutation and combination, \
                some common probability distributions (e.g. binomial and Poisson), sampling, and hypothesis testing. \
                There are some new concepts which are simply extensions of the former, like \
                joint and marginal distributions and estimation based on normal population.',
      workload: {
        score: '4/10',
        description: 'There are weekly lectures and tutorials, but they don\'t even stretch the entire thirteen weeks, \
                     meaning the content is light enough to complete way before the semester ends. \
                     There are no deliverables, aside from a mid-semester quiz and a final exam (which you admittedly have to prepare for). \
                     In my experience, however, you shouldn\'t have to spend too much time on this module even if you want a good grade for it. \
                     Just harken back to your JC (or secondary school) days of mugging and you should be fine. \
                     This doesn\'t mean last-minute cramming is an option though!',
      },
      difficulty: {
        score: '4/10',
        description: 'Again, not too difficult to grasp the concepts and "be good" at them. \
                     There are plenty of practice papers to solidify your understanding (or memorisation lul) of the various topics. \
                     That said, prepare to have to stand out amongst the many others who will be taking this module, \
                     as its bell curve is very likely to be very steep.',
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
      overview: 'The companion module to CS2103T. \
                As its name suggests, it teaches (or at least tries to teach) you how to communicate with your technical and non-technical audience/peers/colleagues. \
                There are two 2-hour sessions each week, with each session focusing on a particular communication skill, \
                ranging from the principles of communication to perfecting a product demo/pitch. \
                This is a CA-heavy module, with a bunch of presentations and "essays" to have to prepare for.',
      workload: {
        score: '7/10',
        description: 'Similar to CS2103T in that putting in the bare minimum effort will net you a pass, but \
                     intending to score well will require you to spend quite a bit more time in order to stand out. \
                     Take note that your teacher will be your main assessor and is solely responsible for the grade you get, \
                     so it would probably be best to put forth a good first impression right from the get-go to make your life easier. \
                     While the deliverables are not too bad in isolation, the fact that one comes right after the other, \
                     coupled with having to do CS2103T in the same semester (along with a few more CS modules I presume), \
                     might make it hard to allocate time to this module. \
                     Spend your time wisely.',
      },
      difficulty: {
        score: '2/10',
        description: 'Mostly common sense. Just remember to say literally anything that comes to mind during each lesson when prompted, \
                     and you should get a good participation grade. Almost every other deliverable is fairly intuitive, \
                     and shouldn\'t be too bad to score well for if you prepare well enough and work on your speaking/presentation skills adequately.',
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
      overview: 'Out of all three of the "IT Professionalism" modules for CS majors, this module is probably the most interesting one. \
                My main takeway from this module was to be critical about all sources of information consumed, \
                and to be aware of falling into the traps of echo chambers in order to become a more well-informed individual. \
                Its lesson style is very similar to CS2101 in that there are two 2-hour sessions with \
                a bunch of regularly-timed deliverables. While I took both modules in the same semester, \
                I found myself looking forward to this module far more each week.',
      workload: {
        score: '8/10',
        description: 'I would say that the CA components are on the whole pretty heavy. \
                     Anecdotally speaking (from friends and myself), however, because there are a few group deliverables, \
                     having good teammates can make a huge difference on how easy (or otherwise miserable) your life will be. \
                     And no, unfortunately you cannot select your teammates this time. \
                     The deliverables are also fairly unique, and as such I found myself spending a lot more time to try to do well in them. \
                     For example, the first CA component requires you and your teammates to put your unique spin \
                     on a popular fairy tale.',
      },
      difficulty: {
        score: '8/10',
        description: 'Doing well for the module is quite unheard of, and you have to be consistent in each assessment item for a chance of doing well. \
                     Because of their unique nature, it might be even harder to score well for them, \
                     because you don\'t even know what to do. \
                     For example, for the last CA component, you are given a prompt (an infographic/article/anything), about 5 min to prepare, \
                     and then you have to give a coherent and cohesive impromptu speech for 3 min about what you saw. \
                     The module was fun in my opinion, but the assessment parts were not.',
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

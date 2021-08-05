/* eslint-disable no-multi-str */
import React from 'react';
import { LONG_DASH } from 'myConstants';
import ModuleReviewAccordion from 'myBlogComponents/moduleReviewAccordion';
import './y2s2.scss';

const Y2S2 = () => {
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
      overview: 'This module introduces you to fundamental principles of computer networks, such as \
                the logical architecture of the internet, as well as various internet protocols. \
                Topics include the web and web applications, DNS, socket programming, transport layer protocols (UDP/TCP), \
                network layer protcols, and various topics like network security and multimedia. \
                My friend described this module as more of a Bio module, and I think it is a pretty accurate description. \
                The content delivered is not as technical as in a typical CS module, \
                and is for the most part fairly intuitive.',
      workload: {
        score: '5/10',
        description: 'This is one of the lighter CS modules in terms of workload. \
                     There are a few assignments, which are applications of the concepts taught during lectures and \
                     can take some time to complete, but besides them, you wouldn\'t be spending too much on the module. \
                     The concepts taught are relatively digestible and shouldn\'t take too long to understand.',
      },
      difficulty: {
        score: '6/10',
        description: 'This module\'s difficulty is directly correlated to its workload, i.e. it\'s not that bad. \
                     However, because of this, its bell curve is likely steep for a CS module as everyone will generally do well. \
                     Such modules\' typical grading systems apply here; get just question wrong during the exam \
                     and you will find yourself dropping a few percentile points down among your peers. \
                     Feel free to take this module relatively lightly, but do not be like me and underestimate the exams.',
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
      overview: 'Pretty interesting module. This module serves as an introduction to the notion of operating systems, \
                with a slight emphasis on Linux. \
                That being said, most of what is taught is generalisable to most modern OS\'s, \
                even though they are fairly rudimentary (being an introductory module). \
                Topics include process management (e.g. threads, synchronisation, process scheduling), \
                memory management (e.g. virtual memory, paging), \
                and file management (e.g. directories, structure), in that order chronologically.',
      workload: {
        score: '8/10',
        description: 'The module is fairly content heavy, but the meat of it lies in its lab assignments. \
                     They can be a nightmare to complete due to the non-deterministic nature of the tasks, \
                     making them hard to test for correctness (I would imagine they are a nightmare to grade as well). \
                     For my semester, I was fortunate enough to be allowed to collaborate with a partner to complete the labs together \
                     and obtain the same grade. Needless to say, I got carried.',
      },
      difficulty: {
        score: '9/10',
        description: 'The concepts were personally not very intuitive and required extra time to understand fully. \
                     The difficulty curve was not linear, however, meaning that while process management and memory management \
                     were pretty hard to digest, file management (taught in the last few weeks) were a complete breeze comparatively. \
                     The labs factor into the difficulty of the module as well. \
                     Do not treat them lightly and start early, or you might risk not being able to complete them in time, \
                     especially if you do not have a lab partner to solve them with.',
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
      overview: 'For better or worse, this module is much more than a simple SQL crash course. \
                It starts with introducing you to the design and theory aspects of databases, \
                including relational algebra and the entity-relational model. \
                You then spend several weeks learning actual SQL. \
                Then in the last few weeks, you learn about schema refinement, with specific focus on \
                functional dependencies and normal forms (Boyce-Codd and third).',
      workload: {
        score: '10/10',
        description: 'Deceptively really heavy, solely because of the group project. \
                     I easily spent the most time on this module this semester. \
                     While the weekly lectures and tutorials did take some time, \
                     a significant portion of my effort for this module was spent in the project. \
                     You are tasked with developing a backend database application, and because a good portion of it is implementation, \
                     you can only start on it after about the halfway point of the semester when you have been taught SQL, \
                     meaning there isn\'t much time to do it, even though there is A LOT to do. \
                     Prepare for at least one sleepless night with your teammates to complete this project. \
                     Oh and FYI, it apparently used to be way worse when the project had a frontend component as well. \
                     Go figure.',
      },
      difficulty: {
        score: '8/10',
        description: 'A solid foundation in set theory (from discrete math) would go a long way in acing this module. \
                     SQL query questions were interesting and useful (for future database-related positions) but can be very challenging at the same time. \
                     And you need to implement a whopping 30 (!!!) SQL functions for the project, in addition to a bunch of other tasks you need to complete.',
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
      overview: 'This is supposed to double as a bridging module for Life Science majors/minors, but other majors (like CS and DSA) \
                opt to take it to fulfill their science module requirements as well, so expect some variety in the cohort. \
                As someone whose favourite subject in secondary school was Biology, this module was simply a joy. \
                The first half covers macrobiology concepts like evolution, biodiversity, ecology, plants and animals, while \
                the second half covers microbiology concepts like the energy/chemistry of life, cell structure/function, DNA and gene expression.',
      workload: {
        score: '6/10',
        description: 'The content is plentiful (being a Biology module) but the depth of each topic isn\'t too overwhelming. \
                     I would suggest attending each weekly lecture (either live or through a webcast) at the very minimum. \
                     The labs (conducted face-to-face when I took the module) were the funnest parts of the module. \
                     There was also a museum visit component, where we were tasked with heading to Lee Kong Chian (LKC) Natural History Museum \
                     (basically the museum at NUS) and answer a bunch of questions using information found in the museum in the style of a treasure hunt, so that was fun.',
      },
      difficulty: {
        score: '4/10',
        description: 'Not very difficult, especially if you have taken a Biology class before (secondary school/H1 in JC or something), \
                     but even if you haven\'t, you probably just need to spend a little more time to familiarise yourself with the concepts. \
                     Because of the "easy-ness" of the concepts and by extension the exams, however, expect the competition to be stiff.',
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
      overview: 'In my completely absolutely 100% for-sure unbiased opinion, I never want to take another business module ever again.',
      workload: {
        score: '?/10',
        description: 'Not sure because I spent like 0 effort here.',
      },
      difficulty: {
        score: '?/10',
        description: 'Shouldn\'t be too bad if you care about the module. I didn\'t though.',
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

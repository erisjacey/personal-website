import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import './blog.scss';

const Blog = () => {
  const PAGE_NAME = 'Blog';
  const PAGE_SUB_HEADER = 'Documentation of my hobbies, interests and miscellaneous topics.';
  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
    </div>
  );
};

export default Blog;

import React from 'react';
import PageHeader from 'myComponents/pageHeader';
import './blog.scss';

const Blog = () => {
  const PAGE_NAME = 'Blog';
  const PAGE_SUB_HEADER = 'This is the Blog page which is still a WIP. Stay tuned!';
  return (
    <div>
      <PageHeader name={PAGE_NAME} subHeader={PAGE_SUB_HEADER} />
    </div>
  );
};

export default Blog;

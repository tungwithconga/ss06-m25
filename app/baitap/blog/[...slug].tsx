import { GetServerSideProps } from 'next';
import React from 'react';

interface BlogPageProps {
  path: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ path }) => {
  return (
    <div>
      <h1>Bạn đang xem blog với đường dẫn: {path}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  const path = slug ? `/${(slug as string[]).join('/')}` : '';

  return {
    props: {
      path,
    },
  };
};

export default BlogPage;

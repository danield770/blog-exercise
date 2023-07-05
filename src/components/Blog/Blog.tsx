// import React from 'react';
import { useData } from '../../hooks/useData';
import Header from '../Header/Header';

// interface Data {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

function Blog() {
  const { data, isLoading } = useData(
    'https://jsonplaceholder.typicode.com/posts/',
    'posts'
  );
  if (isLoading) {
    return;
  }
  return (
    <>
      <Header />
      <h1>Blog</h1>

      {isLoading ? (
        <div>Loading blog posts...</div>
      ) : (
        <ol>
          {data?.map(
            ({
              id,
              title,
              body,
            }: {
              id: number;
              title: string;
              body: string;
            }) => (
              <li key={id}>
                <div>{title}</div>
                <p className='post-body'>{body.slice(0, 200)}</p>
              </li>
            )
          )}
        </ol>
      )}
    </>
  );
}

export default Blog;

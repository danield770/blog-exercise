// import React from 'react';
import { useData } from '../../hooks/useData';
import { Link } from 'react-router-dom';

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
                <Link to={`/post/${id}`} state={{ id, title, body }}>
                  {title}
                </Link>
              </li>
            )
          )}
        </ol>
      )}
    </>
  );
}

export default Blog;

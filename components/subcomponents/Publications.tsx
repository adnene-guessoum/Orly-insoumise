import React from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

const Publications = ({ post, k }) => {
  return (
    <article
      key={k}
      className="mt-7 rounded-lg bg-blue-200 dark:bg-blue-800 p-4"
    >
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        {format(parseISO(post.date), 'dd MMMM yyyy')}
      </p>
      <h1 className="mb-2 text-xl">
        <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
          <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
            {post.title}
          </a>
        </Link>
      </h1>
      <p className="mb-3">{post.description}</p>
      <p>
        <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
          <a className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 underline underline-offset-4">
            Lire la suite...
          </a>
        </Link>
      </p>
    </article>
  );
};

export default Publications;

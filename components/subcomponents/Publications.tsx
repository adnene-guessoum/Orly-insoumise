import React from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

const Publications = ({ post, k }) => {
  return (
    <article
      key={k}
      className="mt-7 rounded-lg bg-blue-200 dark:bg-blue-800 p-4"
    >
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        {format(parseISO(post.date), 'dd MMMM yyyy', { locale: fr })} -
        Catégorie : {post.category}
      </p>
      <h1 className="mb-0 text-xl">
        <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
          <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
            {post.title}
          </a>
        </Link>
      </h1>
      <p></p>
      <p className="mb-3">{post.description}</p>
      <div>
        <span className="underline underline-offset-2">Article par</span> :{' '}
        {post.author}{' '}
      </div>

      <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
        <a className="text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 underline underline-offset-4">
          Lire la suite...
        </a>
      </Link>
    </article>
  );
};

export default Publications;

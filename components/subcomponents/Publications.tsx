import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

const Publications = ({ post, k }) => {
  const imageUrl = post.image;

  return (
    <article
      key={k}
      className="mt-7 rounded-lg bg-blue-200 dark:bg-blue-800 p-4"
    >
      <div className="flex flex-wrap justify-around items-center mb-4 gap-4">
        <Image
          src={encodeURI(imageUrl)}
          alt="illustration article"
          width={300}
          height={378}
          className="rounded-lg"
          priority
        />
        <div className="flex flex-col justify-around items-center lg:w-1/3 w-1/2">
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
        </div>
      </div>
    </article>
  );
};

export default Publications;

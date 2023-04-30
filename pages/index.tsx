import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>Bienvenue sur Orly l&apos;insoumise</h1>
      <p>
        Groupe d&apos;action mobilisée sur la ville d&apos;Orly (94) pour la
        NUPES et la France Insoumise
      </p>

      <div className="flex flex-col justify-between items-start md:items-center mt-8 bg-red-200 dark:bg-red-800 rounded-xl pt-2">
        <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight">
          Retrouvez ici :
        </h2>
        <ul className="list-disc pl-4 my-6">
          <li>Nos Publications régulières : Opinions, Lectures, Analyses</li>
          <li className="mt-2">
            Nos Actualités, Nos Evénements et Actions militantes
          </li>
          <li className="mt-2">
            Nos communiquées et comptes rendues (conseils municipales,
            réunions...)
          </li>
          <li className="mt-2">
            Nos réseaux sociaux et les différents moyens de nous rejoindre
          </li>
          <li className="mt-2">
            Nos Amis du 94, de la NUPES et tous les autres
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-between items-start md:items-center mt-8">
        <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight">
          A LA UNE :{' '}
        </h2>
        <div className="posts-wrapper">
          {posts.map(post => (
            <article
              key={post.slug}
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts }
  };
};

export default Index;

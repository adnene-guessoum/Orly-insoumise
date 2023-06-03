import React from 'react';
import Layout from '../components/Layout';
import Publications from '../components/subcomponents/Publications';
import { getStaticProps } from '../lib/api';
import IndexProps from '../types/index';

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>Bienvenue sur Orly l&apos;insoumise</h1>
      <p>
        Groupe d&apos;action mobilisée sur la ville d&apos;Orly (94) pour la
        NUPES et la France Insoumise
      </p>

      <div className="flex flex-col justify-between items-start md:items-center pl-4 mt-8 bg-red-200 dark:bg-red-800 rounded-xl pt-2">
        <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight">
          Retrouvez ici :
        </h2>
        <ul className="list-disc pl-4 my-6">
          <li>Nos Publications régulières : Opinions, Lectures, Analyses</li>
          <li className="mt-2">
            Nos Actualités, Nos Evénements et Actions militantes
          </li>
          <li className="mt-2">
            Nos communiquées et comptes rendues (conseils municipaux,
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
            <Publications post={post} k={post.slug} key={post.slug} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export { getStaticProps };

export default Index;

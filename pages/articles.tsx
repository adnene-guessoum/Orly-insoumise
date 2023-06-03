import React from 'react';
import { getStaticProps } from '../lib/api';
import FoldableArchive from '../components/FoldableArchive';
import Layout from '../components/Layout';

const Articles = ({ posts }): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Articles - Orly Insoumise'
      }}
    >
      <h1>Articles : </h1>
      <p>
        Toutes nos publications, lettres ouvertes, comptes rendues de réunions
        et de lectures ainsi que nos prises de positions sont disponibles ici.
        Ne les manquez surtout pas !
      </p>
      <FoldableArchive posts={posts} />
    </Layout>
  );
};

export { getStaticProps };

export default Articles;

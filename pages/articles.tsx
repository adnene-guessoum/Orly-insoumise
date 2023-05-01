import React from 'react';
import Layout from '../components/Layout';

const Articles = (): JSX.Element => {
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

      <div className="event dark:bg-gray-600 bg-gray-300">En cours</div>
    </Layout>
  );
};

export default Articles;

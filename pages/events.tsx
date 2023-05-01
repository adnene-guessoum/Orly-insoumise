import React from 'react';
import Layout from '../components/Layout';

export const EventsPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Evenements - Orly Insoumise'
      }}
    >
      <h1>Evénements à venir : </h1>

      <div className="event dark:bg-gray-600 bg-gray-300">En cours</div>
    </Layout>
  );
};

export default EventsPage;

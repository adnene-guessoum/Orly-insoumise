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
      <p>Ne les manquez surtout pas !</p>

      <div className="event bg-gray-600">En cours</div>
    </Layout>
  );
};

export default EventsPage;

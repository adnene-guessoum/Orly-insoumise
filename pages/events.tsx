import React from 'react';
import Layout from '../components/Layout';
import EventTable from '../components/EventTable';

export const EventsPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Evenements - Orly Insoumise'
      }}
    >
      <h1>Evénements à venir : </h1>

      <div className="event dark:bg-gray-600 bg-gray-300 flex justify-center items-center">
        <EventTable />
      </div>
    </Layout>
  );
};

export default EventsPage;

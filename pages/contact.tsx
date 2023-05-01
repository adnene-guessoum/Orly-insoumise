import React from 'react';
import Layout from '../components/Layout';
import { FiMail } from 'react-icons/fi';

const Contact = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Nous ecrire - Orly Insoumise'
      }}
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Nous ecrire
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {' '}
          N&apos;hésitez pas à nous contacter pour toute question ou demande
          d&apos;information.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:items-center mt-8">
          <h3>Nous écrire :</h3>
          <a
            href="mailto:orly.insoumise@gmail.com"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-red-600 hover:bg-red-600 hover:text-white dark:hover:text-white"
          >
            <FiMail className="inline-block mr-2" />
            orly.insoumise@gmail.com
          </a>
        </div>
      </div>
    </Layout>
  );
};

export { Contact as default };

import React from 'react';
import Layout from '../components/Layout';
import { FiMail } from 'react-icons/fi';
import EmailForm from '../components/subcomponents/EmailForm';

const Contact = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Nous ecrire - Orly Insoumise'
      }}
    >
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Contactez-nous !
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {' '}
          N&apos;hésitez pas à nous contacter pour toute question ou demande
          d&apos;information, pour participer ou simplement dire bonjour.
        </p>

        <div className="flex flex-col justify-center items-center gap-8 mt-4 w-full">
          <h3>Notre addresse mail :</h3>
          <a
            href="mailto:orly.insoumise@gmail.com"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-red-600 hover:bg-red-800 hover:text-white dark:hover:text-white"
          >
            <FiMail className="inline-block mr-2" />
            orly.insoumise@gmail.com
          </a>

          <div className="flex flex-col justify-center gap-8 items-center mt-4 w-full">
            <h3>ou bien directement : </h3>

            <EmailForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { Contact as default };

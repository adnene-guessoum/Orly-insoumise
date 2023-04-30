import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Hunter Chang'
      }}
    >
      <div className="flex flex-col justify-between items-start md:items-center mt-8">
        <h2>Qui Sommes-Nous ?</h2>
        <p className="m-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <h2>Contacts :</h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:items-center mt-8">
          <h3>Nous suivre :</h3>
          <a
            href="https://twitter.com/Actionpop_Orly"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/actionpop_orly/"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://actionpopulaire.fr/groupes/2d968ac0-ad22-4910-bcd3-5630076f2bf4/"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
          >
            Action populaire
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 md:items-center mt-8">
        <h3>Nous écrire :</h3>
        <a
          href="mailto:orly.insoumise@gmail.com"
          className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
        >
          orly.insoumise@gmail.com
        </a>
      </div>
    </Layout>
  );
};

export default About;

import React from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/subcomponents/Gallery';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Infos - Orly Insoumise'
      }}
    >
      <div className="flex flex-col justify-between items-start md:items-center mt-8 mb-8">
        <h2>Qui Sommes-Nous ?</h2>
        <p className="m-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>

      <Gallery />

      <div className="flex flex-col justify-between items-start md:items-center mt-8">
        <h2>Réseaux Sociaux :</h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:items-center mt-8">
          <h3>Nous suivre :</h3>
          <a
            href="https://twitter.com/Actionpop_Orly"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-red-600 hover:bg-red-600 hover:text-white dark:hover:text-white"
          >
            <FaTwitter className="inline-block mr-2" />
            Twitter
          </a>
          <a
            href="https://www.instagram.com/actionpop_orly/"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-red-600 hover:bg-red-600 hover:text-white dark:hover:text-white"
          >
            <FaInstagram className="inline-block mr-2" />
            Instagram
          </a>
          <a
            href="https://actionpopulaire.fr/groupes/2d968ac0-ad22-4910-bcd3-5630076f2bf4/"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-red-600 hover:bg-red-700 hover:text-white dark:hover:text-white"
          >
            Action populaire
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default About;

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
        <div className="mt-4">
          <p>
            Groupe d&apos;action de la France insoumise à Orly, nous travaillons
            activement pour renforcer les droits des travailleurs, améliorer
            l&apos;accès à des soins de santé abordables et de qualité, protéger
            l&apos;environnement, et lutter contre toutes les formes de
            discrimination au niveau de notre ville et du département.
          </p>
          <p>
            Nous organisons des manifestations, des campagnes de
            sensibilisation, et des événements pour mobiliser la communauté
            orlysienne sur les enjeux politiques locaux et nationaux, et pour
            entraîner les citoyens à agir pour le changement. Notre groupe est
            inclusif, accueillant tous ceux qui partagent nos valeurs et notre
            engagement pour une ville plus juste et équitable. Nous espérons
            pouvoir compter sur vous pour nous rejoindre dans ces combats !
          </p>
        </div>
      </div>

      <Gallery />

      <div className="flex flex-col justify-between items-center md:items-center mt-8">
        <h2>Réseaux Sociaux :</h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:items-center mt-8">
          <h3>Nous suivre :</h3>
          <a
            href="https://twitter.com/Actionpop_Orly"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-red-600 hover:bg-red-600 hover:text-white dark:hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="inline-block mr-2" />
            Twitter
          </a>
          <a
            href="https://www.instagram.com/actionpop_orly/"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-red-600 hover:bg-red-600 hover:text-white dark:hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="inline-block mr-2" />
            Instagram
          </a>
          <a
            href="https://actionpopulaire.fr/groupes/2d968ac0-ad22-4910-bcd3-5630076f2bf4/"
            className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-red-600 hover:bg-red-700 hover:text-white dark:hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Action populaire
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default About;

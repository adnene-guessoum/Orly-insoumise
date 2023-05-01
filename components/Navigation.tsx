import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className=" text-gray-900 dark:text-white p-4">Accueil</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white p-4">Qui sommes-nous ?</a>
      </Link>
      <Link href="/contact">
        <a className="text-gray-900 dark:text-white p-4">Nous Ecrire</a>
      </Link>
      <Link href="/events">
        <a className="text-gray-900 dark:text-white p-4">Evénements à venir</a>
      </Link>
    </nav>
  );
};

export default Navigation;

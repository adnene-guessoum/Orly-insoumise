import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        className="flex lg:hidden items-center px-3 py-2 border rounded text-gray-900 dark:text-white dark:border-gray-900 hover:text-gray-900 dark:hover:text-white dark:hover:border-red-700 hover:border-red-700"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </button>

      {isMenuOpen && (
        <div className="absolute h-5/8 bg-white top-20 ml-2 left-0 border border-red-700 z-10 ">
          <ul className="p-4 bg-white dark:bg-cyan-950 bg-orange-50">
            <li className="py-2">
              <Link href="/">
                <a className="text-gray-900 dark:text-white">Accueil</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/about">
                <a className="text-gray-900 dark:text-white">
                  Qui sommes-nous ?
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact">
                <a className="text-gray-900 dark:text-white">Nous Ecrire</a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/events">
                <a className="text-gray-900 dark:text-white">
                  Evénements à venir
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/articles">
                <a className="text-gray-900 dark:text-white">Archives</a>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <nav className="hidden lg:flex lg:flex-wrap ">
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
          <a className="text-gray-900 dark:text-white p-4">
            Evénements à venir
          </a>
        </Link>
        <Link href="/articles">
          <a className="text-gray-900 dark:text-white p-4">Archives</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;

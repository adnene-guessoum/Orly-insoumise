import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://orly-insoumise.vercel.app/';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <div className="min-h-screen">
        <header>
          <div className="bg-banner bg-cover bg-center h-59 max-w-5xl xl:max-w-full xl:h-[130px] px-8 mx-auto">
            <div className="flex items-center justify-between py-6">
              <div className="back-wrapper bg-orange-50 dark:bg-cyan-950 ">
                <Navigation />
              </div>
              <div className="back-wrapper bg-orange-50 dark:bg-cyan-950 ">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-5xl xl:max-w-7xl px-8 py-4 mx-auto">
            {children}
          </div>
        </main>
        <footer className="sticky top-[100vh] py-4">
          <div className="max-w-5xl xl:max-w-full px-8 mx-auto">
            <a
              className="text-gray-900 dark:text-white"
              href="https://twitter.com/Actionpop_Orly"
            >
              Orly Insoumise - 2023
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;

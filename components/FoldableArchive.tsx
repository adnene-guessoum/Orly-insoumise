import React, { useState } from 'react';
import ConditionalTable from './subcomponents/ConditionalArticleTable';

const FoldableArchive = ({ posts }): JSX.Element => {
  const initialState = {
    opinions: false,
    institutions: false
  };

  const [foldedState, setFoldedState] = useState(initialState);

  const toggleSection = section => {
    setFoldedState(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const sections = [
    { title: 'Opinions', category: 'OPINION' },
    { title: 'Institutions', category: 'INSTITUTIONS' }
  ];

  return (
    <>
      {sections.map((section, index) => (
        <div className="mb-10" key={`${section.title}-${index}`}>
          <div className="flex flex-row items-center gap-6">
            <h2>{section.title}</h2>
            <button
              onClick={() => toggleSection(section.title.toLowerCase())}
              className="bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-gray-300 dark:text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              {foldedState[section.title.toLowerCase()] ? 'Cacher' : 'Afficher'}
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-1/2 mt-2">
            {foldedState[section.title.toLowerCase()] && (
              <ConditionalTable posts={posts} category={section.category} />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default FoldableArchive;

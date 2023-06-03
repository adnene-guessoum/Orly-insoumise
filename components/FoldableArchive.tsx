import React, { useState } from 'react';
import Link from 'next/link';

const FoldableArchive = ({ posts }): JSX.Element => {
  const [isFolded, setIsFolded] = useState(true);

  const toggle = () => {
    setIsFolded(!isFolded);
  };

  return (
    <div className="mb-10">
      <div className="flex flex-row justify-between lg:justify-start lg:gap-2">
        <h2>Opinions</h2>
        <button
          onClick={toggle}
          className="bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-gray-300 dark:text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {isFolded ? 'Cacher' : 'Afficher'}
        </button>
      </div>
      {isFolded && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-1/2 mt-2">
          <table
            className="table-auto w-full text-sm text-left text-gray-500 dark:text-g
ray-400"
          >
            <tbody>
              {posts
                .filter(post => post.category === 'OPINION')
                .map((post, index) => (
                  <tr
                    key={index}
                    className="bg-white border shadow-none dark:bg-gray-900 dark:border-gra
y-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                  >
                    <td
                      key={index}
                      className="border border-black shadow-none dark:border-white p-2"
                    >
                      {post.date}
                    </td>
                    <td
                      key={index}
                      className="border border-black shadow-none dark:border-white p-2"
                    >
                      <Link href={`/blog/${post.slug}`} key={index}>
                        {post.title}
                      </Link>
                    </td>

                    <td
                      key={index}
                      className="border border-black shadow-none dark:border-white p-2"
                    >
                      {post.description}
                    </td>
                    <td
                      key={index}
                      className="border border-black shadow-none dark:border-white p-2"
                    >
                      Par : {post.author}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FoldableArchive;

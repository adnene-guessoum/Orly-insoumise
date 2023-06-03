import Link from 'next/link';
import { IndexProps } from '../types/index';

const ConditionalTable = ({
  posts,
  category
}: IndexProps & { category: string }): JSX.Element => {
  return (
    <table
      className="table-auto w-full text-sm text-left text-gray-500 dark:text-g
ray-400"
    >
      <tbody>
        {posts
          .filter(post => {
            return post.category === category;
          })
          .map((post, index) => (
            <tr
              key={`${category}-${index}`}
              className="bg-white border shadow-none dark:bg-gray-900 dark:border-gra
y-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
            >
              <td
                key={`${category}-${index}-${post.date}`}
                className="border border-black shadow-none dark:border-white p-2"
              >
                {post.date}
              </td>
              <td
                key={`${category}-${index}-${post.title}`}
                className="border border-black shadow-none dark:border-white p-2"
              >
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </td>

              <td
                key={`${category}-${index}-${post.slug}`}
                className="border border-black shadow-none dark:border-white p-2"
              >
                {post.description}
              </td>
              <td
                key={`${category}-${index}-${post.author}`}
                className="border border-black shadow-none dark:border-white p-2"
              >
                Par : {post.author}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ConditionalTable;

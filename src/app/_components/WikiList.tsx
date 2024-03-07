'use client';

import Link from 'next/link';
import { IPost } from '@/model/Post';

interface IWikiListProps {
  posts: IPost[] | undefined;
}

function WikiList({ posts }: IWikiListProps) {
  return (
    <ul className="w-full h-52">
      {posts?.map((item, index) => (
        <li
          key={index}
          className="mb-2 border border-gray-200 rounded-md px-2 py-1"
        >
          <Link className="text-blue-500" href={`/wiki/${item.title}`}>
            <h3 className="font-semibold text-blue-500">
              Q. <span className="text-gray-700">{item.title}</span>
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default WikiList;

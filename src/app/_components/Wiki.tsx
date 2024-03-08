import { IPost } from '@/model/Post';
import Link from 'next/link';
import React from 'react';

interface IWikiProps {
  wiki: IPost | undefined;
}

function Wiki({ wiki }: IWikiProps) {
  return (
    <li
      key={wiki?.id}
      className="mb-2 border border-gray-200 rounded-md px-2 py-1"
    >
      <Link className="text-blue-500" href={`/wiki/${wiki?.id}`}>
        <h3 className="font-semibold text-blue-500">
          Q. <span className="text-gray-700">{wiki?.title}</span>
        </h3>
      </Link>
    </li>
  );
}

export default Wiki;

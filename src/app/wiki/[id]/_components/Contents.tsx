'use client';

import { getPost } from '@/app/wiki/[id]/_lib/getPost';
import { IPost } from '@/model/Post';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

function Contents() {
  const params = useParams();
  const { id } = params;
  const { data } = useQuery<IPost>({
    queryKey: ['post', 'detail', id],
    queryFn: () => getPost(id as string),
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <article>
      <h1 className="text-3xl font-bold border-b border-gray-300 my-6">
        {data?.title}
      </h1>
      <p>{data?.content}</p>
    </article>
  );
}

export default Contents;

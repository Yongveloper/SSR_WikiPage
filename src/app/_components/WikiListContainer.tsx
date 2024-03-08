'use client';

import { useSearchParams } from 'next/navigation';
import PageNation from './PageNation';
import { useQuery } from '@tanstack/react-query';
import { IPostResponse } from '@/model/Post';
import { getPosts } from '../_lib/getPosts';
import Wiki from './Wiki';

function WikiListSection() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const { data } = useQuery<IPostResponse>({
    queryKey: ['posts', 'page', page],
    queryFn: () => getPosts(page),
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <main className="flex flex-col items-center gap-6">
      <ul className="w-full h-52">
        {data?.posts.map((item) => <Wiki key={item.id} wiki={item} />)}
      </ul>
      {data?.totalPages !== 1 && (
        <PageNation totalPages={Number(data?.totalPages) || 1} />
      )}
    </main>
  );
}

export default WikiListSection;

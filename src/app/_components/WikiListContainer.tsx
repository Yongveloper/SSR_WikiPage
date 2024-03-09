'use client';

import { useSearchParams } from 'next/navigation';
import PageNation from './PageNation';
import Wiki from './Wiki';
import { useGetPostsQuery } from '@/hooks/useGetPostsQuery';

function WikiListContainer() {
  const searchParams = useSearchParams();
  const { data } = useGetPostsQuery(searchParams.get('page') || '1');

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

export default WikiListContainer;

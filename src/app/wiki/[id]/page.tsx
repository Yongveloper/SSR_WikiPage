import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import BackButton from './_components/BackButton';
import { getPost } from '@/app/wiki/[id]/_lib/getPost';
import { getTitles } from './_lib/getTitles';
import Contents from './_components/Contents';
import Link from 'next/link';
import Button from '@/components/Button';

interface IWikiProps {
  params: {
    id: string;
  };
}

async function Wiki({ params }: IWikiProps) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['post', 'detail', id],
    queryFn: () => getPost(id),
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'titles'],
    queryFn: getTitles,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-full">
      <header className="flex justify-between">
        <BackButton />
        <Link href={`/edit/${id}`}>
          <Button>수정</Button>
        </Link>
      </header>
      <HydrationBoundary state={dehydratedState}>
        <Contents />
      </HydrationBoundary>
    </div>
  );
}

export default Wiki;

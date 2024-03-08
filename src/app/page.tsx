import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getPosts } from './_lib/getPosts';
import WikiListContainer from './_components/WikiListContainer';
import Link from 'next/link';
import Button from '@/components/Button';

interface IHomeProps {
  searchParams: { page: string };
}

async function Home({ searchParams }: IHomeProps) {
  const page = searchParams.page || '1';
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'page', page],
    queryFn: () => getPosts(page),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-full flex flex-col gap-6">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">강의 게시판</h1>
        <Link href="/add">
          <Button>추가</Button>
        </Link>
      </header>
      <HydrationBoundary state={dehydratedState}>
        <WikiListContainer />
      </HydrationBoundary>
    </div>
  );
}
export default Home;

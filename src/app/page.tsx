import AddButton from './_components/AddButton';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getPosts } from './_lib/getPosts';
import WikiListContainer from './_components/WikiListContainer';

interface IHomeProps {
  searchParams: { page: string };
}

async function Home({ searchParams }: IHomeProps) {
  const page = searchParams.page || '1';
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', page],
    queryFn: () => getPosts(page),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">강의 게시판</h1>
        <AddButton />
      </div>
      <HydrationBoundary state={dehydratedState}>
        <WikiListContainer />
      </HydrationBoundary>
    </div>
  );
}
export default Home;

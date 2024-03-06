import Link from 'next/link';
import WikiList from './_components/WikiList';
import AddButton from './_components/AddButton';

const data = [
  {
    title: '1번게시물',
  },
  {
    title: '2번게시물',
  },
  {
    title: '3번게시물',
  },
  {
    title: '4번게시물',
  },
  {
    title: '5번게시물',
  },
];

function Home() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">강의 게시판</h1>
        <AddButton />
      </div>
      <WikiList />
      {/* Todo: 페이지네이션 */}
      <Link className="text-blue-500 hover:underline" href={`/page/2`}>
        다음페이지
      </Link>
    </div>
  );
}
export default Home;

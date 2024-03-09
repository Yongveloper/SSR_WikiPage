import Button from '@/components/Button';
import Link from 'next/link';

function Error() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="mt-12 font-bold text-2xl text-red-500">
        게시글을 조회할 수 없습니다.
      </h1>
      <Link href="/">
        <Button>홈으로 이동</Button>
      </Link>
    </div>
  );
}

export default Error;

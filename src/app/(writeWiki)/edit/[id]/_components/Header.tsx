import Button from '@/components/Button';
import Link from 'next/link';

interface IHeaderProps {
  id: string;
}

function Header({ id }: IHeaderProps) {
  return (
    <header className="mb-4">
      <Link href={`/wiki/${id}`}>
        <Button>
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>뒤로가기</span>
        </Button>
      </Link>
    </header>
  );
}

export default Header;

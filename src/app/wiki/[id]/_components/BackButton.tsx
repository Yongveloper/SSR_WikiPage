import Link from 'next/link';

function BackButton() {
  return (
    <Link href="/">
      <button
        type="button"
        className="w-26 flex items-center justify-center px-2 py-2 text-sm text-blue-500 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>뒤로가기</span>
      </button>
    </Link>
  );
}

export default BackButton;

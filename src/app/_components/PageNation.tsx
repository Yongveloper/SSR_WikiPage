'use client';

import { usePageNation } from '@/hooks/usePageNation';
import Link from 'next/link';

interface IPageNationProps {
  totalPages: number;
}

function PageNation({ totalPages }: IPageNationProps) {
  const { current, pages, handlePrev, handleNext, isNoPrev, isNoNext } =
    usePageNation(totalPages, 5);

  return (
    <nav>
      <ul className="inline-flex -space-x-px text-sm">
        {!isNoPrev && (
          <li>
            <Link
              href={`?page=${pages[0] - 1}`}
              onClick={handlePrev}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              이전
            </Link>
          </li>
        )}
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={`?page=${page}`}
              className={`${current === page ? 'text-blue-600 border hover:text-blue-700' : 'text-gray-500 hover:text-gray-700'} flex items-center justify-center px-3 h-8 leading-tight  bg-white border border-gray-300 hover:bg-gray-100`}
            >
              {page}
            </Link>
          </li>
        ))}
        {!isNoNext && (
          <li>
            <Link
              href={`?page=${pages[pages.length - 1] + 1}`}
              onClick={handleNext}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              다음
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PageNation;

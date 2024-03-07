'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const usePageNation = (totalPages: number, maxPages: number) => {
  const searchParams = useSearchParams();

  const [current, setCurrent] = useState(Number(searchParams.get('page')) || 1);
  const [pages, setPages] = useState<number[]>([]);
  const isNoPrev = pages[0] === 1;
  const isNoNext = pages[pages.length - 1] === totalPages;

  const handlePrev = () => {
    setCurrent((current) => Math.max(1, current - maxPages));
  };

  const handleNext = () => {
    setCurrent((current) => Math.min(totalPages, current + maxPages));
  };

  useEffect(() => {
    setCurrent(Number(searchParams.get('page')) || 1);
    const startPage = Math.floor((current - 1) / maxPages) * maxPages + 1;
    const endPage = Math.min(startPage + maxPages - 1, totalPages);
    const newPages = [];
    for (let i = startPage; i <= endPage; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, [searchParams]);

  return {
    current,
    pages,
    handlePrev,
    handleNext,
    isNoPrev,
    isNoNext,
  };
};

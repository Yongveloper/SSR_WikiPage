'use client';
import { useEffect } from 'react';

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NODE_ENV === 'development') {
        require('@/mocks/browser');
      }
    }
  }, []);

  return null;
};

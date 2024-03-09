import Spinner from '@/components/Spinner';
import { Suspense } from 'react';

interface IEditLayoutProps {
  children: React.ReactNode;
}

function EditLayout({ children }: IEditLayoutProps) {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}

export default EditLayout;
